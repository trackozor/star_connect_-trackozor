/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/ButtonIcon.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Bouton circulaire avec icône uniquement
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

/**
 * Bouton affichant uniquement une icône.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {string} props.icon - Nom de l'icône Ionicons
 * @param {Function} props.onPress - Callback au clic
 * @param {number} [props.size=24] - Taille de l'icône
 * @param {string} [props.testID] - Identifiant de test
 * @returns {JSX.Element}
 */
export default function ButtonIcon({ icon, onPress, size = 24, testID }) {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`Bouton ${icon}`}
        testID={testID || 'ButtonIcon'}
        >
        <Ionicons name={icon} size={size} color={theme.colors.onPrimary} />
        </TouchableOpacity>
    );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.sm,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
