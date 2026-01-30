/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/EmptyState.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Affichage d'état vide avec message et illustration
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Composant d'affichage pour contenu vide.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {string} props.message - Message principal
 * @param {any} props.imageSource - Source image
 * @param {string} [props.testID] - Identifiant de test
 * @returns {JSX.Element}
 */
export default function EmptyState({ message, imageSource, testID }) {
    return (
        <View style={styles.container} testID={testID || 'EmptyState'}>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>{message}</Text>
        </View>
    );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: theme.spacing.lg,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: theme.spacing.md,
    },
    text: {
        fontSize: theme.typography.fontSize.md,
        color: theme.colors.textMuted,
        textAlign: 'center',
    },
});
