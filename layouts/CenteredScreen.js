/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : layout/CenteredScreen.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Wrapper d’écran centré verticalement et horizontalement
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Écran centré, idéal pour loading, empty state ou messages simples.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu centré à afficher
 * @returns {JSX.Element}
 */
export default function CenteredScreen({ children }) {
    return <View style={styles.container}>{children}</View>;
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.md,
        backgroundColor: theme.colors.background
    }
});
