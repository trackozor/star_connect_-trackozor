/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Footer.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Pied de page avec informations légales ou version
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Affiche les informations en bas d’écran.
 *
 * @component
 */
export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2026 AGERIS - Tous droits réservés</Text>
      <Text style={styles.text}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.sm,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.background
  },
  text: {
    fontSize: theme.fontSizes.caption,
    color: theme.colors.textMuted
  }
});
