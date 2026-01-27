/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : screens/LoginScreen.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Écran de connexion utilisateur
 *                - Champ email / mot de passe
 *                - Bouton de connexion avec chargement
 *                - Structure responsive avec AuthLayout
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout JSDoc + refonte pro
 * =============================================================================
 */

import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { AuthLayout } from '../layouts';
import { TextField, Button } from '../components';
import { theme } from '../theme';

/**
 * @component LoginScreen
 * @description Interface d'authentification utilisateur
 * @returns {JSX.Element}
 */
export default function LoginScreen() {
  // États contrôlés
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * Simule la connexion utilisateur
   * @function handleLogin
   */
  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log('✅ Utilisateur connecté :', email);
      // TODO : redirection ou stockage token
    }, 1200);
  };

  return (
    <AuthLayout>
      {/* Titre de la page */}
      <Text style={styles.title}>Connexion</Text>

      {/* Champ email */}
      <TextField
        label="Adresse email"
        value={email}
        onChangeText={setEmail}
        placeholder="exemple@ageris.fr"
      />

      {/* Champ mot de passe */}
      <TextField
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        secureTextEntry
      />

      {/* Bouton de connexion */}
      <Button label="Se connecter" onPress={handleLogin} loading={loading} />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md
  }
});
