/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : screens/SettingsScreen.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Écran des paramètres utilisateur (langue, thème, notifications)
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLayout from '../layouts/AppLayout';

/**
 * @component SettingsScreen
 * @description Permet à l'utilisateur de modifier ses préférences globales.
 */
export default function SettingsScreen() {
    return (
    <AppLayout>
        <View style={styles.container}>
            <Text style={styles.title}>Paramètres</Text>
         {/* À implémenter : langue, thème, sécurité, notifications */}
        </View>
    </AppLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});
