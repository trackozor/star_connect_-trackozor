/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Loader.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Loader centralisé pour affichage pendant chargement
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * @component Loader
 * @returns {JSX.Element}
 */
export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
