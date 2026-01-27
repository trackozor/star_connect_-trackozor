/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/helpers.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Fonctions utilitaires génériques.
 *                - Attente (wait), debounce
 *                - Formatage léger, opérations sur tableaux / chaînes
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Documentation JSDoc + fonctions étendues
 * =============================================================================
 */

/**
 * Attente asynchrone (pause)
 * @function wait
 * @param {number} ms - Durée en millisecondes
 * @returns {Promise<void>} - Promise résolue après le délai
 */
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Limite les appels successifs à une fonction (debounce)
 * @function debounce
 * @param {Function} func - Fonction à exécuter
 * @param {number} delay - Délai en millisecondes
 * @returns {Function} - Fonction enveloppée
 */
export function debounce(func, delay = 300) {
    let timeout;
    return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
    };
}

/**
 * Supprime les doublons dans un tableau
 * @function removeDuplicates
 * @param {Array} array - Tableau d'origine
 * @returns {Array} - Tableau sans doublons
 */
export function removeDuplicates(array) {
    return [...new Set(array)];
}

/**
 * Met la première lettre en majuscule
 * @function capitalize
 * @param {string} str - Chaîne à transformer
 * @returns {string} - Chaîne avec une majuscule initiale
 */
export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Génère un slug à partir d’une chaîne
 * @function slugify
 * @param {string} str - Texte source
 * @returns {string} - Slug en kebab-case
 */
export function slugify(str) {
    return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}
