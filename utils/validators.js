/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/validators.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.2.0
 * Statut       : Stable
 * Description  : Fonctions de validation communes (emails, mots de passe, champs)
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout JSDoc
 *                1.2.0 - Meilleure lisibilité + extensibilité
 * =============================================================================
 */

/**---------------------------------------------------------------------------------------
 * Fonction : isValidEmail
 * ----------------------------------------------------------------------------------------
 * Valide une adresse email de manière stricte et professionnelle
 *
 * Critères :
 * - Commence par une lettre ou chiffre
 * - Pas de double point, ni de point au début ou à la fin
 * - Autorise ".", "-", "_" dans la partie locale
 * - Domaine valide (lettres, chiffres, tirets, point)
 * - Extension entre 2 et 24 caractères
 *
 * @function isValidEmail
 * @param {string} email - Adresse email à tester
 * @returns {boolean}
 */
export function isValidEmail(email) {
    const regex = /^(?!.*[.]{2})[a-zA-Z0-9](\.?[a-zA-Z0-9_\-])*@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,24}$/;
    return regex.test(email.trim());
}


/**---------------------------------------------------------------------------------------
 * Fonction : isValidPassword
 *----------------------------------------------------------------------------------------
 *  Vérifie si un mot de passe est suffisamment sécurisé
 * Critères :
 * - Minimum 16 caractères
 * - Au moins 1 majuscule
 * - Au moins 1 minuscule
 * - Au moins 1 chiffre
 * - Au moins 1 caractère spécial
 * - Aucun espace
 *
 * @function isValidPassword
 * @param {string} password - Mot de passe à tester
 * @returns {boolean}
 */
export function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]{16,}$/;
    return regex.test(password);
}

/**---------------------------------------------------------------------------------------
 * Fonction : isRequired
 * ----------------------------------------------------------------------------------------
 * Vérifie qu’un champ requis n’est pas vide
 * @function isRequired
 * @param {string} value
 * @returns {boolean}
 */
export function isRequired(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

/**---------------------------------------------------------------------------------------
 * Fonction : isMatch
 * ----------------------------------------------------------------------------------------
 * Vérifie si deux valeurs sont égales (utile pour confirmer un mot de passe)
 * @function isMatch
 * @param {string} val1
 * @param {string} val2
 * @returns {boolean}
 */
export function isMatch(val1, val2) {
    return val1 === val2;
}


/**---------------------------------------------------------------------------------------
 * Fonction : validatePhoneNumber
 * ----------------------------------------------------------------------------------------
 * Valide et normalise un numéro de téléphone
 * - Supporte FR par défaut (+33 / 0X XX XX XX XX)
 * - Nettoie les caractères spéciaux
 * - Convertit en format E.164 si valide
 *
 * @function validatePhoneNumber
 * @param {string} input - Numéro brut saisi
 * @returns {{ valid: boolean, message: string, normalized?: string }}
 */
export function validatePhoneNumber(input) {
    if (!input) {
        return { valid: false, message: 'Numéro vide' };
    }

    // Nettoyage des caractères non numériques
    let cleaned = input.replace(/[\s().-]/g, '').replace(/^00/, '+');
    const international = cleaned.startsWith('+');

    if (international) {
        const onlyDigits = cleaned.replace(/\D/g, '');
        if (onlyDigits.length < 11 || onlyDigits.length > 15) {
        return {
            valid: false,
            message: 'Numéro international invalide (11 à 15 chiffres attendus)',
        };
        }
        if (!/^\+[1-9]\d{10,14}$/.test(cleaned)) {
        return {
            valid: false,
            message: 'Format international non reconnu',
        };
        }

        return {
        valid: true,
        normalized: cleaned,
        message: 'Numéro international valide',
        };
    }

    // Numéro national français : commence par 0 + 9 chiffres
    if (/^0[1-9]\d{8}$/.test(cleaned)) {
        const normalized = '+33' + cleaned.slice(1);
        return {
        valid: true,
        normalized,
        message: 'Numéro français valide',
        };
    }

    return {
        valid: false,
        message: 'Format invalide : numéro inconnu ou trop court',
    };
}


