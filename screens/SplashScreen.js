/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : screens/SplashScreen.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Écran de lancement de l'application avec logo et chargement
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

/**
 * @component SplashScreen
 * @description Affiche une animation ou logo pendant le chargement initial.
 * Peut servir à vérifier le token, charger les données de base, etc.
 */
export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Exemple : Redirection après 2 secondes (à adapter)
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>AGERIS</Text>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
