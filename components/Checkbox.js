/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Checkbox.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Case à cocher accessible avec label
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Composant Checkbox contrôlé.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {boolean} props.checked - État de la case
 * @param {Function} props.onToggle - Callback lors du changement
 * @param {string} props.label - Texte associé
 * @param {string} [props.testID] - Identifiant de test
 * @returns {JSX.Element}
 */
export default function Checkbox({ checked, onToggle, label, testID }) {
    return (
        <Pressable
        style={styles.container}
        onPress={onToggle}
        accessibilityRole="checkbox"
        accessibilityState={{ checked }}
        accessibilityLabel={label}
        testID={testID || 'Checkbox'}
        >
        {/* Case */}
        <View style={[styles.box, checked && styles.boxChecked]} />

        {/* Label */}
        <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.sm,
    },
    box: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        marginRight: 8,
    },
    boxChecked: {
        backgroundColor: theme.colors.primary,
    },
    label: {
        fontSize: theme.typography.fontSize.md,
        color: theme.colors.text,
    },
});
