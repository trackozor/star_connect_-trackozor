/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Badge.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.1.1
 * Statut       : Stable
 * Description  : Badge coloré pour statuts, tags ou notifications
 * Historique   : 1.0.0 - Version initiale
 *                1.1.0 - Ajout commentaires et JSDoc
 *                1.1.1 - Accessibilité + testID + fallback color
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Composant Badge visuel, pour statuts ou étiquettes.
 *
 * @component
 * @param {Object} props - Props du composant
 * @param {string} props.label - Texte affiché dans le badge
 * @param {string} [props.color="primary"] - Couleur du badge (clé du thème.colors)
 * @param {string} [props.accessibilityLabel] - Texte pour les lecteurs d'écran
 * @param {string} [props.testID] - ID pour tests automatisés
 * @returns {JSX.Element}
 */
export default function Badge({
  label,
  color = 'primary',
  accessibilityLabel,
  testID,
}) {
  const backgroundColor = theme.colors[color] || theme.colors.primary;

  return (
    <View
      style={[styles.badge, { backgroundColor }]}
      accessible
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel || `Badge : ${label}`}
      testID={testID || 'Badge'}
    >
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: theme.radius.sm,
    alignSelf: 'flex-start',
  },
  label: {
    color: theme.colors.onPrimary,
    fontSize: theme.typography.body,
    fontWeight: '600',
  },
});
