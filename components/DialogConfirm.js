/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/DialogConfirm.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Fenêtre modale de confirmation avec deux actions
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../theme';

/**
 * Dialog de confirmation.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {boolean} props.visible - Visibilité
 * @param {string} props.message - Message affiché
 * @param {Function} props.onConfirm - Action de confirmation
 * @param {Function} props.onCancel - Action d'annulation
 * @param {string} [props.testID] - Identifiant de test
 * @returns {JSX.Element}
 */
export default function DialogConfirm({
    visible,
    message,
    onConfirm,
    onCancel,
    testID,
    }) {
    return (
        <Modal transparent visible={visible} animationType="fade">
        <View style={styles.overlay} testID={testID || 'DialogConfirm'}>
            <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.cancel} onPress={onCancel}>
                <Text style={styles.text}>Annuler</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.confirm} onPress={onConfirm}>
                <Text style={styles.text}>Confirmer</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        </Modal>
    );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
        width: '80%',
    },
    message: {
        fontSize: theme.typography.fontSize.md,
        color: theme.colors.text,
        marginBottom: theme.spacing.md,
        textAlign: 'center',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    confirm: {
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm,
    },
    cancel: {
        backgroundColor: theme.colors.secondary,
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm,
    },
    text: {
        color: theme.colors.onPrimary,
        fontWeight: theme.typography.fontWeight.bold,
    },
});
