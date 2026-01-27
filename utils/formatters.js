/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/formatters.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Fonctions de formatage (date, nombre, texte, taille)
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Documentation et cohérence renforcée
 * =============================================================================
 */

/**
 * Formate une date au format local
 * @function formatDate
 * @param {string|Date} dateStr - Date ou chaîne de date
 * @returns {string} - Date lisible selon locale
 */
export function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
}

/**
 * Formate un nombre avec séparateurs
 * @function formatNumber
 * @param {number} num - Nombre à formater
 * @returns {string} - Chaîne formatée
 */
export function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

/**
 * Coupe un texte à une certaine longueur avec ellipse
 * @function truncateText
 * @param {string} text - Texte à tronquer
 * @param {number} [length=50] - Longueur maximale
 * @returns {string} - Texte tronqué
 */
export function truncateText(text, length = 50) {
    return text.length > length ? text.slice(0, length) + '…' : text;
}

/**
 * Convertit une taille en octets en unité lisible
 * @function humanFileSize
 * @param {number} size - Taille en octets
 * @returns {string} - Taille lisible (Ko, Mo, Go…)
 */
export function humanFileSize(size) {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'KB', 'MB', 'GB', 'TB'][i]
    );
}
