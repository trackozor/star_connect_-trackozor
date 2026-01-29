/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : screens/ProfileScreen.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Écran de consultation et édition du profil utilisateur
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLayout from '../layout/AppLayout';

/**
 * @component ProfileScreen
 * @description Affiche les informations personnelles de l'utilisateur.
 * Peut inclure des actions d'édition, changement de mot de passe, etc.
 */
export default function ProfileScreen() {
    return (
        <AppLayout>
        <View style={styles.container}>
        <Text style={styles.title}>Profil utilisateur</Text>
        {/* À implémenter : avatar, infos, bouton modifier */}
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
