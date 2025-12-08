// Weather Service - PrevisÃ£o do Tempo
// Usa OpenWeatherMap API (gratuita - 1000 chamadas/dia)

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'bbb1b9bda22e7d16e1ea3ed3f8455530'; // Configurar no .env
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutos
const CACHE_KEY = 'weather_cache';

export const WeatherService = {
    /**
     * Busca dados do clima para uma localizaÃ§Ã£o
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @returns {Promise<Object|null>} Dados do clima ou null em caso de erro
     */
    async getWeather(lat, lon) {
        // Verificar cache primeiro
        const cached = this.getFromCache();
        if (cached) {
            console.log('[Weather] Usando dados em cache');
            return cached;
        }

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${OPENWEATHER_API_KEY}`
            );

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();

            const weather = {
                temp: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                description: data.weather[0].description,
                icon: this.getWeatherIcon(data.weather[0].id),
                location: data.name,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                timestamp: Date.now()
            };

            this.saveToCache(weather);
            console.log('[Weather] Dados atualizados:', weather.location, `${weather.temp}Â°C`);
            return weather;
        } catch (error) {
            console.error('[Weather] Erro ao buscar clima:', error);
            return null;
        }
    },

    /**
     * ObtÃ©m a localizaÃ§Ã£o do usuÃ¡rio via geolocalizaÃ§Ã£o
     * @returns {Promise<Object>} Coordenadas {lat, lon}
     */
    async getLocation() {
        return new Promise((resolve) => {
            // Verificar se hÃ¡ localizaÃ§Ã£o salva nas preferÃªncias
            const savedLocation = this.getSavedLocation();
            if (savedLocation) {
                console.log('[Weather] Usando localizaÃ§Ã£o salva:', savedLocation.city);
                resolve(savedLocation);
                return;
            }

            // Tentar geolocalizaÃ§Ã£o do navegador
            if (!navigator.geolocation) {
                console.warn('[Weather] GeolocalizaÃ§Ã£o nÃ£o disponÃ­vel, usando padrÃ£o');
                resolve(this.getDefaultLocation());
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    };
                    console.log('[Weather] GeolocalizaÃ§Ã£o obtida:', location);
                    resolve(location);
                },
                (error) => {
                    console.warn('[Weather] GeolocalizaÃ§Ã£o negada:', error.message);
                    resolve(this.getDefaultLocation());
                },
                { timeout: 5000, maximumAge: 600000 } // 10 minutos de cache
            );
        });
    },

    /**
     * Retorna localizaÃ§Ã£o padrÃ£o (SÃ£o Paulo)
     */
    getDefaultLocation() {
        return {
            lat: -23.5505,
            lon: -46.6333,
            city: 'SÃ£o Paulo'
        };
    },

    /**
     * Retorna localizaÃ§Ã£o salva pelo usuÃ¡rio
     */
    getSavedLocation() {
        const saved = localStorage.getItem('user_location');
        return saved ? JSON.parse(saved) : null;
    },

    /**
     * Salva localizaÃ§Ã£o preferida do usuÃ¡rio
     */
    saveLocation(lat, lon, city) {
        localStorage.setItem('user_location', JSON.stringify({ lat, lon, city }));
    },

    /**
     * Mapeia cÃ³digo de clima para emoji
     * @param {number} weatherId - CÃ³digo do OpenWeatherMap
     * @returns {string} Emoji representando o clima
     */
    getWeatherIcon(weatherId) {
        // CÃ³digos: https://openweathermap.org/weather-conditions
        if (weatherId >= 200 && weatherId < 300) return 'â›ˆï¸'; // Tempestade
        if (weatherId >= 300 && weatherId < 400) return 'ðŸŒ¦ï¸'; // Garoa
        if (weatherId >= 500 && weatherId < 600) return 'ðŸŒ§ï¸'; // Chuva
        if (weatherId >= 600 && weatherId < 700) return 'â„ï¸'; // Neve
        if (weatherId >= 700 && weatherId < 800) return 'ðŸŒ«ï¸'; // NÃ©voa/Neblina
        if (weatherId === 800) return 'â˜€ï¸'; // CÃ©u limpo
        if (weatherId === 801) return 'ðŸŒ¤ï¸'; // Poucas nuvens
        if (weatherId === 802) return 'â›…'; // Nuvens dispersas
        if (weatherId >= 803) return 'â˜ï¸'; // Muito nublado
        return 'ðŸŒ¥ï¸'; // PadrÃ£o
    },

    /**
     * Busca dados do cache
     */
    getFromCache() {
        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return null;

        try {
            const data = JSON.parse(cached);
            const age = Date.now() - data.timestamp;

            if (age > CACHE_DURATION) {
                console.log('[Weather] Cache expirado');
                localStorage.removeItem(CACHE_KEY);
                return null;
            }

            return data;
        } catch (error) {
            console.error('[Weather] Erro ao ler cache:', error);
            localStorage.removeItem(CACHE_KEY);
            return null;
        }
    },

    /**
     * Salva dados no cache
     */
    saveToCache(weather) {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(weather));
        } catch (error) {
            console.error('[Weather] Erro ao salvar cache:', error);
        }
    },

    /**
     * Limpa o cache
     */
    clearCache() {
        localStorage.removeItem(CACHE_KEY);
    }
};
