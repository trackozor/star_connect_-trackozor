/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Button.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Bouton stylisé avec état actif/désactivé/chargement
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * @component Button
 * @param {Object} props
 * @param {string} props.label - Texte du bouton
 * @param {Function} props.onPress - Fonction appelée au clic
 * @param {boolean} [props.disabled=false] - Désactive le bouton
 * @param {boolean} [props.loading=false] - Affiche un spinner à la place du label
 * @returns {JSX.Element}
 */
export default function Button({ label, onPress, disabled = false, loading = false }) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.buttonDisabled]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isDisabled}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <Text style={styles.text}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.md,
    alignItems: 'center'
  },
  buttonDisabled: {
    backgroundColor: theme.colors.secondary
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium
  }
});
