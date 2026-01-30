/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/FormFieldWrapper.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Wrapper standard pour champ de formulaire (label + contenu + message)
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Composant utilitaire pour afficher un label, un champ et un message d'erreur.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {string} props.label - Label du champ de formulaire
 * @param {string} [props.error] - Message d'erreur à afficher
 * @param {React.ReactNode} props.children - Champ de saisie ou composant enfant
 * @returns {JSX.Element}
 */
export default function FormFieldWrapper({ label, error, children }) {
  return (
    <View style={styles.container}>
      {/* Label au-dessus du champ */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Contenu du champ */}
      {children}

      {/* Message d'erreur en dessous */}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  label: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text,
    marginBottom: 4,
    fontWeight: theme.typography.fontWeight.medium,
  },
  error: {
    marginTop: 4,
    color: theme.colors.error,
    fontSize: theme.typography.fontSize.sm,
  },
});
