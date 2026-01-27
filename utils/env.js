/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/env.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Gestion des environnements (dev/prod)
 *                - URL API dynamique
 *                - Aide à la détection de contexte
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Refactor + validation de structure
 * =============================================================================
 */

const ENV = {
  dev: {
    apiUrl: 'http://localhost:8000/api'
  },
  prod: {
    apiUrl: 'https://api.ageris.com'
  }
};

/**
 * Détection automatique de l’environnement courant
 * @constant currentEnv
 * @type {'dev'|'prod'}
 */
const currentEnv = __DEV__ ? 'dev' : 'prod';

/**
 * Retourne l’URL de l’API selon l’environnement
 * @function getApiUrl
 * @returns {string} - URL de l’API
 */
export const getApiUrl = () => ENV[currentEnv].apiUrl;

/**
 * Vérifie si on est en environnement de développement
 * @function isDev
 * @returns {boolean}
 */
export const isDev = () => currentEnv === 'dev';

/**
 * Vérifie si on est en production
 * @function isProd
 * @returns {boolean}
 */
export const isProd = () => currentEnv === 'prod';
