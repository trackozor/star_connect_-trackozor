/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/TextField.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Champ de saisie avec label, support erreur, sécurité
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * @component TextField
 * @param {Object} props
 * @param {string} props.label - Label du champ
 * @param {string} props.value - Valeur actuelle
 * @param {Function} props.onChangeText - Callback changement
 * @param {string} [props.placeholder] - Placeholder du champ
 * @param {boolean} [props.secureTextEntry] - Masquer les caractères
 * @param {string} [props.error] - Message d’erreur
 * @returns {JSX.Element}
 */
export default function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error
}) {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={[styles.input, error && styles.inputError]}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.spacing.md
  },
  label: {
    marginBottom: 4,
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.sm
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    fontSize: theme.typography.fontSize.md
  },
  inputError: {
    borderColor: theme.colors.danger
  },
  error: {
    marginTop: 4,
    color: theme.colors.danger,
    fontSize: theme.typography.fontSize.xs
  }
});
