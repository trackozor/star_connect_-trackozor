/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : layout/KeyboardAvoidingWrapper.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Enveloppe un contenu avec gestion automatique du clavier
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet,
    View
} from 'react-native';

/**
 * Wrapper universel pour les formulaires ou contenus sensibles au clavier.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu protégé par la gestion clavier
 * @returns {JSX.Element}
 */
export default function KeyboardAvoidingWrapper({ children }) {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.flex}>{children}</View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

// ============================================================================
// Styles
// ============================================================================
const styles = StyleSheet.create({
    flex: {
        flex: 1
    }
});
