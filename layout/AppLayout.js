/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : layouts/AppLayout.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Layout principal de l’application
 *                - Intègre la structure globale (header/footer si nécessaire)
 *                - Fournit un fond, padding et scroll de base
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../theme';

/**
 * @component AppLayout
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu principal à afficher
 * @returns {JSX.Element}
 */
const AppLayout = ({ children }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  container: {
    flex: 1,
    padding: theme.spacing.md
  }
});

export default AppLayout;
