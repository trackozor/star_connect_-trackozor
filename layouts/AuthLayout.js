/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : layout/AuthLayout.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Layout dédié aux écrans d'authentification avec gestion du clavier
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout SafeArea et nettoyage du style
 * =============================================================================
 */

import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { theme } from '../theme';

/**
 * Layout spécifique aux écrans de connexion/inscription.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu de la page
 * @returns {JSX.Element}
 */
export default function AuthLayout({ children }) {
  return (
    <SafeAreaView style={styles.safeArea} testID="AuthLayout">
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>{children}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundAlt
  },
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing.md
  }
});
