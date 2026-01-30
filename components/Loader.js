/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Loader.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Loader centralisé pour affichage pendant chargement
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout props dynamiques, accessibilité, testID
 * =============================================================================
 */

import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Composant Loader : spinner de chargement centré, avec texte optionnel.
 *
 * @component
 * @param {Object} props - Props du composant
 * @param {'small' | 'large'} [props.size='large'] - Taille du spinner
 * @param {string} [props.color=theme.colors.primary] - Couleur du spinner
 * @param {string} [props.label] - Texte affiché sous le spinner
 * @param {string} [props.accessibilityLabel] - Label a11y personnalisé
 * @param {string} [props.testID] - ID pour les tests automatisés
 * @returns {JSX.Element}
 */
export default function Loader({
  size = 'large',
  color = theme.colors.primary,
  label,
  accessibilityLabel,
  testID,
}) {
  return (
    <View
      style={styles.container}
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel || 'Chargement en cours'}
      testID={testID || 'Loader'}
    >
      <ActivityIndicator size={size} color={color} />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  label: {
    marginTop: theme.spacing.sm,
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textMuted,
  },
});
