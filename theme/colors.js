/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : theme/colors.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Palette de couleurs centralisée du projet
 *                - Assure la cohérence visuelle
 *                - Utilisée par tous les composants via le thème global
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout de la documentation JSDoc
 * =============================================================================
 */

/**
 * @typedef {Object} Colors
 * @property {string} primary - Couleur principale
 * @property {string} secondary - Couleur secondaire
 * @property {string} success - Succès (valide)
 * @property {string} danger - Erreur ou alerte critique
 * @property {string} warning - Alerte modérée
 * @property {string} info - Informations
 * @property {string} light - Fond très clair
 * @property {string} dark - Couleur sombre
 * @property {string} background - Fond général
 * @property {string} surface - Fond secondaire (cards)
 * @property {string} textPrimary - Texte standard
 * @property {string} textSecondary - Texte secondaire
 * @property {string} transparent - Transparent
 * @property {string} black - Noir
 * @property {string} white - Blanc
 */

/**
 * Couleurs du thème global AGERIS
 * @type {Colors}
 */
export const colors = {
  primary: '#007BFF',
  secondary: '#6C757D',
  success: '#28A745',
  danger: '#DC3545',
  warning: '#FFC107',
  info: '#17A2B8',

  light: '#F8F9FA',
  dark: '#343A40',

  background: '#FFFFFF',
  surface: '#F2F2F2',

  textPrimary: '#212529',
  textSecondary: '#6C757D',

  transparent: 'transparent',
  black: '#000000',
  white: '#FFFFFF'
};
