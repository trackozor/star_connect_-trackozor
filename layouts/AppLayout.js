/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : layout/AppLayout.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Layout principal avec SafeArea, padding dynamique et StatusBar
 * Historique   : 1.0.0 - Version initiale
 *                1.1.0 - Ajout props noPadding et backgroundColor
 * =============================================================================
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import theme from '../theme';

/**
 * Structure globale avec gestion du SafeArea et de la couleur de fond.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu à afficher
 * @param {boolean} [props.noPadding=false] - Supprime le padding interne
 * @param {string} [props.backgroundColor] - Couleur de fond personnalisée
 * @returns {JSX.Element}
 */
export default function AppLayout({ children, noPadding = false, backgroundColor }) {
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: backgroundColor || theme.colors.background }
      ]}
      testID="AppLayout"
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={[styles.container, noPadding && styles.noPadding]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: theme.spacing.md
  },
  noPadding: {
    padding: 0
  }
});

