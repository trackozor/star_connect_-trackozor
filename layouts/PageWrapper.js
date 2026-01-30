/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : layout/PageWrapper.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : ScrollView flexible avec padding optionnel
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout props scrollEnabled et noPadding
 * =============================================================================
 */

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Wrapper scrollable pour affichage de contenu avec ou sans padding.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu scrollable
 * @param {boolean} [props.noPadding=false] - Supprime le padding
 * @param {boolean} [props.scrollEnabled=true] - Active ou désactive le scroll
 * @returns {JSX.Element}
 */
export default function PageWrapper({ children, noPadding = false, scrollEnabled = true }) {
  return (
    <ScrollView
      contentContainerStyle={[styles.container, noPadding && styles.noPadding]}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={scrollEnabled}
      testID="PageWrapper"
    >
      {children}
    </ScrollView>
  );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md
  },
  noPadding: {
    padding: 0
  }
});
