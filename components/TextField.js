/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/TextField.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Champ de saisie contrôlé avec label, erreur et accessibilité
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Composant champ de texte (input) accessible et stylé.
 *
 * @component
 * @param {Object} props - Props du composant
 * @param {string} props.label - Label affiché au-dessus du champ
 * @param {string} props.value - Valeur actuelle du champ
 * @param {Function} props.onChangeText - Callback de modification de texte
 * @param {string} [props.placeholder] - Placeholder du champ
 * @param {boolean} [props.secureTextEntry] - Masque le texte (mot de passe)
 * @param {string} [props.error] - Message d'erreur à afficher
 * @param {string} [props.accessibilityLabel] - Label a11y personnalisé
 * @param {string} [props.testID] - ID pour tests automatisés
 * @returns {JSX.Element}
 */
export default function TextField({
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry = false,
    error,
    accessibilityLabel,
    testID,
}) {
    return (
        <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}

        <TextInput
            style={[styles.input, error && styles.inputError]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            accessible
            accessibilityLabel={accessibilityLabel || label}
            accessibilityHint={placeholder}
            testID={testID || 'TextField'}
            placeholderTextColor={theme.colors.textMuted}
        />

        {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
    container: {
        marginBottom: theme.spacing.md,
    },
    label: {
        fontSize: theme.typography.fontSize.sm,
        color: theme.colors.text,
        marginBottom: 4,
        fontWeight: theme.typography.fontWeight.medium,
    },
    input: {
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: theme.radius.sm,
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: theme.typography.fontSize.md,
        color: theme.colors.text,
        backgroundColor: theme.colors.inputBackground || theme.colors.surface,
    },
    inputError: {
        borderColor: theme.colors.error,
    },
    error: {
        marginTop: 4,
        color: theme.colors.error,
        fontSize: theme.typography.fontSize.sm,
    },
});
