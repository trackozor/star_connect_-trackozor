/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : theme/index.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Export centralisé du design system
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Imports documentés
 * =============================================================================
 */

import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { radius } from './radius';
import { shadows } from './shadows';

/**
 * Thème unifié utilisé dans toute l’application
 * @type {{colors: any, spacing: any, typography: any, radius: any, shadows: any}}
 */
export const theme = {
  colors,
  spacing,
  typography,
  radius,
  shadows
};
