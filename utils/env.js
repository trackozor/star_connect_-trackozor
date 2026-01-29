/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : utils/env.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.2.0
 * Statut       : Stable
 * Description  : Gestion centralisée des environnements (dev/prod)
 *                - Détection automatique
 *                - Accès sécurisé aux URLs
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout validation et JSDoc
 *                1.2.0 - Ajout fallback + fonction getEnv()
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
 * @throws {Error} - Si l’environnement est inconnu
 */
export const getApiUrl = () => {
  if (!ENV[currentEnv]) {
    throw new Error(`Environnement inconnu : ${currentEnv}`);
  }
  return ENV[currentEnv].apiUrl;
};

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

/**
 * Retourne l’environnement courant ('dev' ou 'prod')
 * @function getEnv
 * @returns {string}
 */
export const getEnv = () => currentEnv;
