/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Separator.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Séparateur horizontal esthétique entre sections
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Séparateur horizontal visuel entre blocs.
 *
 * @component
 */
export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.md
  }
});
