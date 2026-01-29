/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/helpers.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.2.0
 * Statut       : Stable
 * Description  : Fonctions utilitaires générales :
 *                - Manipulation de chaînes
 *                - Génération d’identifiants
 *                - Logique de contrôle de type
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout JSDoc + commentaires
 *                1.2.0 - Sécurisation + robustesse
 * =============================================================================
 */

/**
 * Capitalise la première lettre d’une chaîne
 * @function capitalize
 * @param {string} str - Chaîne à modifier
 * @returns {string}
 */
export function capitalize(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Génère un UUID v4 simple (non cryptographique)
 * @function generateUUID
 * @returns {string}
 */
export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

/**
 * Vérifie si une valeur est vide (null, undefined, chaîne vide ou tableau vide)
 * @function isEmpty
 * @param {*} val - Valeur à tester
 * @returns {boolean}
 */
export function isEmpty(val) {
    return (
        val === null ||
        val === undefined ||
        (typeof val === 'string' && val.trim() === '') ||
        (Array.isArray(val) && val.length === 0)
    );
}

/**
 * Vérifie si deux objets sont identiques (shallow)
 * @function shallowEqual
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {boolean}
 */
export function shallowEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (
        typeof obj1 !== 'object' ||
        typeof obj2 !== 'object' ||
        obj1 === null ||
        obj2 === null
    )
        return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    return keys1.every(key => obj1[key] === obj2[key]);
}
