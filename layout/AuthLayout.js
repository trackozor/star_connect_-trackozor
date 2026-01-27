/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : layouts/AuthLayout.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Layout pour les écrans d’authentification (login/register)
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { theme } from '../theme';

/**
 * @component AuthLayout
 * @param {Object} props
 * @param {React.ReactNode} props.children - Formulaires d’authentification
 * @returns {JSX.Element}
 */
const AuthLayout = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>{children}</View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.surface
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing.lg
  }
});

export default AuthLayout;
