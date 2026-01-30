/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Card.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Composant visuel encadré pour contenu ou résumé
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout accessibilité, testID, support style externe
 * =============================================================================
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Composant de carte visuelle encadrée, pour structurer des blocs de contenu.
 *
 * @component
 * @param {Object} props - Props du composant
 * @param {React.ReactNode} props.children - Contenu à afficher dans la carte
 * @param {Object} [props.style] - Style additionnel à fusionner avec celui par défaut
 * @param {string} [props.accessibilityLabel] - Texte pour lecteur d'écran
 * @param {string} [props.testID] - ID pour tests automatisés
 * @returns {JSX.Element}
 */
export default function Card({ children, style, accessibilityLabel, testID }) {
  return (
    <View
      style={[styles.card, style]}
      accessible
      accessibilityRole="summary"
      accessibilityLabel={accessibilityLabel || 'Carte de contenu'}
      testID={testID || 'Card'}
    >
      {children}
    </View>
  );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.md,
    ...theme.shadows.light,
  },
});
