/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Badge.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Badge coloré pour statuts, tags ou notifications
 * Historique   : 1.0.0 - Version initiale
 *                1.1.0 - Ajout commentaires et JS Doc
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Affiche un badge de statut avec style dynamique
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - Texte du badge
 * @param {string} [props.color="primary"] - Couleur du badge (clé du thème)
 */
export default function Badge({ label, color = 'primary' }) {
  const backgroundColor = theme.colors[color] || theme.colors.primary;

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: theme.radius.sm,
    alignSelf: 'flex-start'
  },
  label: {
    color: theme.colors.onPrimary,
    fontSize: theme.typography.body,
    fontWeight: '600'
  }
});
