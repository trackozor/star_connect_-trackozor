/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : theme/shadows.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Styles d’ombre pour éléments UI
 *                - Cross-platform (iOS + Android)
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Structuration + doc JSDoc
 * =============================================================================
 */

/**
 * @typedef {Object} ShadowStyle
 * @property {string} shadowColor
 * @property {{width: number, height: number}} shadowOffset
 * @property {number} shadowOpacity
 * @property {number} shadowRadius
 * @property {number} elevation
 */

/**
 * Ombres disponibles selon l’intensité
 * @type {{light: ShadowStyle, medium: ShadowStyle, heavy: ShadowStyle}}
 */
export const shadows = {
  light: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3
  },
  heavy: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6
  }
};
