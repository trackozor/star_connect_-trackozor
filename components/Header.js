/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Header.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Composant de bandeau supérieur avec titre de page
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Affiche le titre de page dans un bandeau fixe.
 *
 * @component
 * @example
 * return <Header title="Dashboard" />
 * 
 * @param {Object} props
 * @param {string} props.title - Titre affiché dans le bandeau
 */
export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border
  },
  title: {
    fontSize: theme.fontSizes.title,
    fontWeight: 'bold',
    color: theme.colors.primary
  }
});
