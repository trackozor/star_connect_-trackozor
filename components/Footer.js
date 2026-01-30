/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Footer.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Pied de page avec informations légales ou version
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout props dynamiques, accessibilité, testID
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Composant Footer : affiche un pied de page avec mention légale et version.
 *
 * @component
 * @param {Object} props - Props du composant
 * @param {string} [props.legalNotice] - Texte de mention légale
 * @param {string} [props.version] - Numéro de version affiché
 * @param {string} [props.accessibilityLabel] - Label a11y personnalisé
 * @param {string} [props.testID] - ID pour les tests automatisés
 * @returns {JSX.Element}
 */
export default function Footer({
  legalNotice = '© 2026 AGERIS - Tous droits réservés',
  version = 'v1.0.0',
  accessibilityLabel,
  testID,
}) {
  return (
    <View
      style={styles.container}
      accessible
      accessibilityRole="contentinfo"
      accessibilityLabel={accessibilityLabel || `Pied de page ${version}`}
      testID={testID || 'Footer'}
    >
      <Text style={styles.text}>{legalNotice}</Text>
      <Text style={styles.text}>{version}</Text>
    </View>
  );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.sm,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.background,
  },
  text: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textMuted,
  },
});
