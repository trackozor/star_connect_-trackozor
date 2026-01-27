/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/ErrorBoundary.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Composant React de gestion des erreurs avec affichage de secours
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Composant de sécurité pour capturer les erreurs de rendu React.
 * Affiche un message d'erreur personnalisé si une erreur est détectée.
 *
 * @component
 * @example
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Composants enfants protégés
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.toString() };
  }

  componentDidCatch(error, errorInfo) {
    console.error('💥 Erreur capturée par ErrorBoundary:', error, errorInfo);
    // Ici, possibilité d’envoyer à un outil type Sentry
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Une erreur est survenue</Text>
          <Text style={styles.message}>{this.state.errorMessage}</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background
  },
  title: {
    fontSize: theme.fontSizes.title,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    color: theme.colors.error
  },
  message: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textMuted,
    textAlign: 'center'
  }
});
