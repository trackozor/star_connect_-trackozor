/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/validators.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Fonctions de validation de données usuelles
 *                - Email, mot de passe, champs vides, numériques
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout JSDoc, robustesse améliorée
 * =============================================================================
 */

/**
 * Vérifie si une chaîne est un email valide
 * @function isEmailValid
 * @param {string} email - Adresse email à tester
 * @returns {boolean} - true si l’email est valide
 */
export function isEmailValid(email) {
    const regex = /^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
    return regex.test(email);
}

/**
 * Vérifie si un mot de passe est fort
 * @function isPasswordStrong
 * @param {string} password - Mot de passe à tester
 * @returns {boolean} - true si le mot de passe est robuste
 */
export function isPasswordStrong(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;
    return regex.test(password);
}

/**
 * Vérifie si une chaîne est vide ou null
 * @function isEmpty
 * @param {string} value - Chaîne à tester
 * @returns {boolean} - true si vide ou null
 */
export function isEmpty(value) {
    return value == null || value.trim() === '';
}

/**
 * Vérifie si une chaîne contient uniquement des chiffres
 * @function hasOnlyNumbers
 * @param {string} value - Texte à valider
 * @returns {boolean} - true si uniquement numérique
 */
export function hasOnlyNumbers(value) {
    return /^\\d+$/.test(value);
}
