/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Header.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Composant de bandeau supérieur avec titre de page
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Alignement dynamique, a11y, testID
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Composant de bandeau supérieur contenant un titre de page.
 *
 * @component
 * @example
 * return <Header title="Dashboard" align="center" />
 *
 * @param {Object} props - Props du composant Header
 * @param {string} props.title - Titre affiché
 * @param {'left' | 'center' | 'right'} [props.align='left'] - Alignement du texte
 * @param {string} [props.accessibilityLabel] - Texte pour lecteur d'écran
 * @param {string} [props.testID] - ID pour tests automatisés
 * @returns {JSX.Element}
 */
export default function Header({
  title,
  align = 'left',
  accessibilityLabel,
  testID,
}) {
  const textAlign = ['left', 'center', 'right'].includes(align)
    ? align
    : 'left';

  return (
    <View
      style={styles.container}
      accessible
      accessibilityRole="header"
      accessibilityLabel={accessibilityLabel || `En-tête : ${title}`}
      testID={testID || 'Header'}
    >
      <Text style={[styles.title, { textAlign }]}>{title}</Text>
    </View>
  );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  },
});
