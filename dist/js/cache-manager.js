// js/cache-manager.js - M4.1: Cache Local com Versioning
// Gerencia cache localStorage com TTL e validação de versão

export const CacheManager = {
    VERSION: 'v1.0.0', // Incrementar quando estrutura de dados mudar
    TTL: 5 * 60 * 1000, // 5 minutos em ms
    
    /**
     * Salva dados no cache com versão e timestamp
     */
    set: (key, data) => {
        const entry = {
            data,
            version: CacheManager.VERSION,
            timestamp: Date.now()
        };
        try {
            localStorage.setItem(`cache_${key}`, JSON.stringify(entry));
        } catch (err) {
            console.warn(`[M4.1] Erro ao salvar cache ${key}:`, err.message);
        }
    },
    
    /**
     * Recupera dados do cache validando versão e TTL
     */
    get: (key) => {
        try {
            const stored = localStorage.getItem(`cache_${key}`);
            if (!stored) return null;
            
            const entry = JSON.parse(stored);
            
            // Validar versão - se mudar, invalidar cache
            if (entry.version !== CacheManager.VERSION) {
                console.log(`[M4.1] Cache invalidado (versão diferente): ${key}`);
                CacheManager.clear(key);
                return null;
            }
            
            // Validar TTL - se expirou, remover
            if (Date.now() - entry.timestamp > CacheManager.TTL) {
                console.log(`[M4.1] Cache expirado (TTL): ${key}`);
                CacheManager.clear(key);
                return null;
            }
            
            console.log(`[M4.1] Cache válido (${Math.round((Date.now() - entry.timestamp) / 1000)}s): ${key}`);
            return entry.data;
        } catch (err) {
            console.warn(`[M4.1] Erro ao ler cache ${key}:`, err.message);
            return null;
        }
    },
    
    /**
     * Remove uma entrada do cache
     */
    clear: (key) => {
        try {
            localStorage.removeItem(`cache_${key}`);
        } catch (err) {
            console.warn(`[M4.1] Erro ao limpar cache ${key}:`, err.message);
        }
    },
    
    /**
     * Limpa todos os caches do app
     */
    clearAll: () => {
        try {
            Object.keys(localStorage)
                .filter(k => k.startsWith('cache_'))
                .forEach(k => localStorage.removeItem(k));
            console.log('[M4.1] Todos os caches foram limpos');
        } catch (err) {
            console.warn('[M4.1] Erro ao limpar todos os caches:', err.message);
        }
    },
    
    /**
     * Força invalidação ao fazer logout
     */
    invalidateOnLogout: () => {
        console.log('[M4.1] Invalidando cache no logout');
        CacheManager.clearAll();
    }
};
