/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/formatters.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.2.0
 * Statut       : Stable
 * Description  : Fonctions utilitaires de formatage :
 *                - Dates localisées
 *                - Nombres avec séparateurs
 *                - Textes tronqués
 *                - Tailles de fichiers lisibles
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Documentation complète
 *                1.2.0 - Ajout fallback et sécurité des entrées
 * =============================================================================
 */

/**
 * Formate une date de manière localisée (fr-FR par défaut)
 * @function formatDate
 * @param {string|Date} dateStr - Date ou chaîne de date
 * @param {string} [locale='fr-FR'] - Locale optionnelle
 * @param {Object} [options={}] - Options Intl.DateTimeFormat
 * @returns {string} - Date lisible
 */
export function formatDate(dateStr, locale = 'fr-FR', options = {}) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date)) return '';
    return date.toLocaleDateString(locale, options);
}

/**
 * Formate un nombre avec des séparateurs
 * @function formatNumber
 * @param {number} num - Nombre à formater
 * @param {string} [locale='fr-FR'] - Locale optionnelle
 * @returns {string}
 */
export function formatNumber(num, locale = 'fr-FR') {
    if (typeof num !== 'number') return '';
    return new Intl.NumberFormat(locale).format(num);
}

/**
 * Coupe un texte à une certaine longueur avec ellipse
 * @function truncateText
 * @param {string} text - Texte à tronquer
 * @param {number} [length=50] - Longueur max
 * @returns {string}
 */
export function truncateText(text, length = 50) {
    if (!text) return '';
    return text.length > length ? text.slice(0, length) + '…' : text;
}

/**
 * Convertit une taille d’octets en format lisible
 * @function humanFileSize
 * @param {number} size - Taille en octets
 * @returns {string}
 */
export function humanFileSize(size) {
    if (!size || typeof size !== 'number') return '0 B';
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
        (size / Math.pow(1024, i)).toFixed(2) +
        ' ' +
        ['B', 'KB', 'MB', 'GB', 'TB'][i]
    );
}
