/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/log.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.2.0
 * Statut       : Stable
 * Description  : Module de logging centralisé
 *                - Active/désactive les logs selon l’environnement
 *                - Fournit plusieurs niveaux : info, warn, error, debug
 *                - Facilement extensible vers des services externes
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout JSDoc + options
 *                1.2.0 - Préparation pour intégration services externes
 * =============================================================================
 */

import { isDev } from './env';

/**
 * Log une information générique
 * @function logInfo
 * @param {...any} args - Contenu à afficher
 */
export function logInfo(...args) {
    if (isDev()) console.info('[INFO]', ...args);
}

/**
 * Log un avertissement
 * @function logWarn
 * @param {...any} args - Contenu à afficher
 */
export function logWarn(...args) {
    if (isDev()) console.warn('[WARN]', ...args);
}

/**
 * Log une erreur
 * @function logError
 * @param {...any} args - Contenu à afficher
 */
export function logError(...args) {
    if (isDev()) console.error('[ERROR]', ...args);
}

/**
 * Log de debug (désactivable en production)
 * @function logDebug
 * @param {...any} args - Contenu à afficher
 */
export function logDebug(...args) {
    if (isDev()) console.debug('[DEBUG]', ...args);
}

/**
 * Point d'entrée unique pour un logger custom futur (Sentry, etc.)
 * @function logEvent
 * @param {string} type - Type de log : 'info', 'warn', 'error', 'debug'
 * @param {...any} args - Données à logguer
 */
export function logEvent(type = 'info', ...args) {
    switch (type) {
        case 'info':
        logInfo(...args);
        break;
        case 'warn':
        logWarn(...args);
        break;
        case 'error':
        logError(...args);
        break;
        case 'debug':
        logDebug(...args);
        break;
        default:
        if (isDev()) console.log('[LOG]', ...args);
    }

}
