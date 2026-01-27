/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : theme/spacing.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Système d’espacement unifié (marges / paddings)
 *                - Utilisé pour la mise en page fluide et responsive
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout de la documentation JSDoc
 * =============================================================================
 */

/**
 * @typedef {Object} Spacing
 * @property {number} xs - Très petit espacement
 * @property {number} sm - Petit espacement
 * @property {number} md - Espacement moyen (standard)
 * @property {number} lg - Grand espacement
 * @property {number} xl - Très grand espacement
 * @property {number} xxl - Espacement extra-large
 */

/**
 * Espacements standards pour marges/paddings
 * @type {Spacing}
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40
};
