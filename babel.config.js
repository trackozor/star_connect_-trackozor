/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : babel.config.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Configuration Babel pour transpilation React Native avec Expo
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo']
  };
};
