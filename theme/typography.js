/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : theme/typography.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Système typographique du design system
 *                - Définit les tailles et graisses de texte
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout JSDoc
 * =============================================================================
 */

/**
 * @typedef {Object} Typography
 * @property {string} fontFamily - Police par défaut
 * @property {Object} fontSize - Tailles de texte
 * @property {Object} fontWeight - Graisses typographiques
 */

/**
 * Typographie globale utilisée dans l’UI
 * @type {Typography}
 */
export const typography = {
  fontFamily: 'System',
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700'
  }
};
