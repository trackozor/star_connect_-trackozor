/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/ErrorBoundary.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Composant React de gestion des erreurs avec affichage de secours
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout accessibilité, testID, props fallback
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Composant de sécurité qui capture les erreurs de rendu.
 * Affiche un message de secours si une erreur est interceptée.
 *
 * @component
 * @example
 * <ErrorBoundary fallbackText="Quelque chose s'est mal passé.">
 *   <MyComponent />
 * </ErrorBoundary>
 *
 * @param {Object} props - Props du composant
 * @param {React.ReactNode} props.children - Composants enfants protégés
 * @param {string} [props.fallbackText] - Texte d'erreur personnalisé
 * @param {string} [props.accessibilityLabel] - Label a11y pour bloc d’erreur
 * @param {string} [props.testID] - ID pour tests automatisés
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
    console.error('💥 Erreur capturée par ErrorBoundary :', error, errorInfo);
    // Optionnel : envoyer vers un service comme Sentry / LogRocket ici
  }

  render() {
    const {
      fallbackText = "Une erreur est survenue",
      accessibilityLabel,
      testID,
    } = this.props;

    if (this.state.hasError) {
      return (
        <View
          style={styles.container}
          accessible
          accessibilityRole="alert"
          accessibilityLiveRegion="polite"
          accessibilityLabel={accessibilityLabel || fallbackText}
          testID={testID || 'ErrorBoundary'}
        >
          <Text style={styles.title}>{fallbackText}</Text>
          <Text style={styles.message}>{this.state.errorMessage}</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.md,
    color: theme.colors.error,
  },
  message: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
});
