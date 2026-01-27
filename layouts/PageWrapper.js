/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : layouts/PageWrapper.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Wrapper léger avec ScrollView et padding standard
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * @component PageWrapper
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu de la page
 * @returns {JSX.Element}
 */
const PageWrapper = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md
  }
});

export default PageWrapper;
