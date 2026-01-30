/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Button.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Bouton stylisé avec état actif/désactivé/chargement
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout variant, accessibilité, testID, refactor styles
 * =============================================================================
 */

import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Composant bouton générique avec gestion des états (loading, disabled) et support de variants.
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - Texte du bouton
 * @param {Function} props.onPress - Fonction appelée au clic
 * @param {boolean} [props.disabled=false] - Désactive le bouton
 * @param {boolean} [props.loading=false] - Affiche un spinner
 * @param {string} [props.variant="primary"] - Style visuel : "primary" ou "outline"
 * @param {string} [props.accessibilityLabel] - Texte pour lecteur d'écran
 * @param {string} [props.testID] - ID pour tests automatisés
 * @returns {JSX.Element}
 */
export default function Button({
  label,
  onPress,
  disabled = false,
  loading = false,
  variant = 'primary',
  accessibilityLabel,
  testID,
}) {
  const isDisabled = disabled || loading;
  const variantStyle = variant === 'outline' ? styles.button_outline : styles.button_primary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variantStyle,
        isDisabled && styles.button_disabled
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      testID={testID || 'Button'}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <Text style={styles.text}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_primary: {
    backgroundColor: theme.colors.primary,
  },
  button_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  button_disabled: {
    opacity: 0.6,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
  },
});
