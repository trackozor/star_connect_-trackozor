/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : theme/radius.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Définition des arrondis d’éléments UI
 *                - Utilisé dans tous les composants visuels
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout JSDoc
 * =============================================================================
 */

/**
 * @typedef {Object} Radius
 * @property {number} sm - Léger arrondi
 * @property {number} md - Arrondi standard
 * @property {number} lg - Arrondi prononcé
 * @property {number} pill - Forme pilule (ex: boutons)
 * @property {number} full - Cercle complet (avatars)
 */

/**
 * Rayons de bordure
 * @type {Radius}
 */
export const radius = {
  sm: 4,
  md: 8,
  lg: 16,
  pill: 999,
  full: 9999
};
