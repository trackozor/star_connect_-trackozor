/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : screens/HomeScreen.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Écran d’accueil après connexion
 *                - Utilise le layout global
 *                - Affiche une vue personnalisable
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Mise en forme + doc
 * =============================================================================
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { AppLayout, PageWrapper } from '../layouts';
import { theme } from '../theme';

/**
 * @component HomeScreen
 * @returns {JSX.Element}
 */
export default function HomeScreen() {
  return (
    <AppLayout>
      <PageWrapper>
        <Text style={styles.heading}>Bienvenue sur AGERIS 🚀</Text>
        <Text style={styles.text}>
          Ceci est votre tableau de bord. Les fonctionnalités seront bientôt activées.
        </Text>
      </PageWrapper>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm
  },
  text: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text
  }
});
