/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/StatusBar.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Composant d’intégration de la status bar personnalisée
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';

/**
 * StatusBar customisée avec les couleurs du thème.
 *
 * @component
 */
export default function CustomStatusBar() {
  return <StatusBar style="dark" backgroundColor={theme.colors.background} />;
}
