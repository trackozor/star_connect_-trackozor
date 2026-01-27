/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/log.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Module de log unifié pour le debug et les traces système.
 *                - Standardise les messages dans la console
 *                - Facilite la lecture des logs pendant le développement
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Documentation JSDoc complète
 * =============================================================================
 */

const LOG_PREFIX = '[AGERIS MOBILE]';

/**
 * Log d'information simple
 * @function logInfo
 * @param {string} message - Message principal à afficher
 * @param {object} [data={}] - Données optionnelles à afficher
 */
export function logInfo(message, data = {}) {
    console.log(`ℹ️ ${LOG_PREFIX}`, message, data);
}

/**
 * Log de succès
 * @function logSuccess
 * @param {string} message - Message de confirmation ou de succès
 * @param {object} [data={}] - Données optionnelles à afficher
 */
export function logSuccess(message, data = {}) {
    console.log(`✅ ${LOG_PREFIX}`, message, data);
}

/**
 * Log d’avertissement
 * @function logWarn
 * @param {string} message - Message de précaution ou de doute
 * @param {object} [data={}] - Données associées
 */
export function logWarn(message, data = {}) {
    console.warn(`⚠️ ${LOG_PREFIX}`, message, data);
}

/**
 * Log d’erreur
 * @function logError
 * @param {string} message - Message d’erreur explicite
 * @param {object} [data={}] - Données liées à l’erreur
 */
export function logError(message, data = {}) {
    console.error(`❌ ${LOG_PREFIX}`, message, data);
}
