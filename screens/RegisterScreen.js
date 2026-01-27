/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : screens/RegisterScreen.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Écran d'inscription pour les nouveaux utilisateurs
 *                - Champs nom, email, mot de passe
 *                - Validation et feedback utilisateur
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Documentation + thème intégré
 * =============================================================================
 */

import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { AuthLayout } from '../layouts';
import { TextField, Button } from '../components';
import { theme } from '../theme';

/**
 * @component RegisterScreen
 * @returns {JSX.Element}
 */
export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * Gère la logique d'inscription utilisateur
   */
  const handleRegister = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log('👤 Utilisateur inscrit :', { name, email });
      // TODO : envoi backend + redirection
    }, 1500);
  };

  return (
    <AuthLayout>
      <Text style={styles.title}>Créer un compte</Text>

      <TextField label="Nom complet" value={name} onChangeText={setName} />
      <TextField label="Adresse email" value={email} onChangeText={setEmail} />
      <TextField
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button label="S'inscrire" onPress={handleRegister} loading={loading} />
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
