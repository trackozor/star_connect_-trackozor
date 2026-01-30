/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Switch.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Interrupteur on/off accessible
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, Switch as RNSwitch, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Composant Switch contrôlé.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {boolean} props.value - Valeur actuelle
 * @param {Function} props.onValueChange - Callback de modification
 * @param {string} props.label - Texte descriptif
 * @param {string} [props.testID] - Identifiant de test
 * @returns {JSX.Element}
 */
export default function Switch({ value, onValueChange, label, testID }) {
    return (
        <View style={styles.container}>
        {/* Label */}
        <Text style={styles.label}>{label}</Text>

        {/* Switch natif */}
        <RNSwitch
            value={value}
            onValueChange={onValueChange}
            accessibilityRole="switch"
            accessibilityLabel={label}
            trackColor={{ true: theme.colors.primary, false: '#cccccc' }}
            thumbColor={value ? theme.colors.primary : '#ffffff'}
            testID={testID || 'Switch'}
        />
        </View>
    );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.sm,
    },
    label: {
        fontSize: theme.typography.fontSize.md,
        color: theme.colors.text,
    },
});
