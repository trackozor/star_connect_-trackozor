/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Card.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Composant visuel encadré pour contenu ou résumé
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * @component Card
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu à afficher dans la carte
 * @returns {JSX.Element}
 */
export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.md,
    ...theme.shadows.light
  }
});
