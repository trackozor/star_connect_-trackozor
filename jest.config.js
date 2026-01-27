/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : jest.config.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Configuration de base pour les tests unitaires avec Jest
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
};
