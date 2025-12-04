// Weather Service - Previsão do Tempo
// Usa OpenWeatherMap API (gratuita - 1000 chamadas/dia)

const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'bbb1b9bda22e7d16e1ea3ed3f8455530'; // Configurar no .env
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutos
const CACHE_KEY = 'weather_cache';

export const WeatherService = {
    /**
     * Busca dados do clima para uma localização
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
            console.log('[Weather] Dados atualizados:', weather.location, `${weather.temp}°C`);
            return weather;
        } catch (error) {
            console.error('[Weather] Erro ao buscar clima:', error);
            return null;
        }
    },

    /**
     * Obtém a localização do usuário via geolocalização
     * @returns {Promise<Object>} Coordenadas {lat, lon}
     */
    async getLocation() {
        return new Promise((resolve) => {
            // Verificar se há localização salva nas preferências
            const savedLocation = this.getSavedLocation();
            if (savedLocation) {
                console.log('[Weather] Usando localização salva:', savedLocation.city);
                resolve(savedLocation);
                return;
            }

            // Tentar geolocalização do navegador
            if (!navigator.geolocation) {
                console.warn('[Weather] Geolocalização não disponível, usando padrão');
                resolve(this.getDefaultLocation());
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    };
                    console.log('[Weather] Geolocalização obtida:', location);
                    resolve(location);
                },
                (error) => {
                    console.warn('[Weather] Geolocalização negada:', error.message);
                    resolve(this.getDefaultLocation());
                },
                { timeout: 5000, maximumAge: 600000 } // 10 minutos de cache
            );
        });
    },

    /**
     * Retorna localização padrão (São Paulo)
     */
    getDefaultLocation() {
        return {
            lat: -23.5505,
            lon: -46.6333,
            city: 'São Paulo'
        };
    },

    /**
     * Retorna localização salva pelo usuário
     */
    getSavedLocation() {
        const saved = localStorage.getItem('user_location');
        return saved ? JSON.parse(saved) : null;
    },

    /**
     * Salva localização preferida do usuário
     */
    saveLocation(lat, lon, city) {
        localStorage.setItem('user_location', JSON.stringify({ lat, lon, city }));
    },

    /**
     * Mapeia código de clima para emoji
     * @param {number} weatherId - Código do OpenWeatherMap
     * @returns {string} Emoji representando o clima
     */
    getWeatherIcon(weatherId) {
        // Códigos: https://openweathermap.org/weather-conditions
        if (weatherId >= 200 && weatherId < 300) return '⛈️'; // Tempestade
        if (weatherId >= 300 && weatherId < 400) return '🌦️'; // Garoa
        if (weatherId >= 500 && weatherId < 600) return '🌧️'; // Chuva
        if (weatherId >= 600 && weatherId < 700) return '❄️'; // Neve
        if (weatherId >= 700 && weatherId < 800) return '🌫️'; // Névoa/Neblina
        if (weatherId === 800) return '☀️'; // Céu limpo
        if (weatherId === 801) return '🌤️'; // Poucas nuvens
        if (weatherId === 802) return '⛅'; // Nuvens dispersas
        if (weatherId >= 803) return '☁️'; // Muito nublado
        return '🌥️'; // Padrão
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
