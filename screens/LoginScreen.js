/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : screens/LoginScreen.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.2.0
 * Statut       : Stable
 * Description  : Écran de connexion utilisateur
 *                - Logo
 *                - Header "Connexion"
 *                - Champs email / mot de passe
 *                - Lien "Mot de passe oublié ?"
 *                - Footer global
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout JSDoc + refonte
 *                1.2.0 - Intégration Logo + Footer + lien navigation
 * =============================================================================
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthLayout } from '../layouts';
import { Logo, Header, TextField, Button, Footer } from '../components';
import { theme } from '../theme';
import { ROUTES } from '../navigation';

/**
 * @component LoginScreen
 * @description Interface d'authentification utilisateur
 * @returns {JSX.Element}
 */
export default function LoginScreen() {
  const navigation = useNavigation();

  // États contrôlés
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * @function handleLogin
   * @description Simulation connexion
   */
  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log('✅ Connexion réussie :', email);
      // TODO : redirection ou stockage token
    }, 1200);
  };

  return (
    <AuthLayout>
      <View style={styles.container}>
        {/* Logo */}
        <Logo size={80} />

        {/* Titre principal */}
        <Header title="Connexion" />

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

        {/* Lien mot de passe oublié */}
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}
          style={styles.forgotContainer}
        >
          <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        {/* Bouton connexion */}
        <Button label="Se connecter" onPress={handleLogin} loading={loading} />

        {/* Footer global */}
        <Footer />
      </View>
    </AuthLayout>
  );
}

// =============================================================================
// STYLES
// =============================================================================

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'stretch'
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.md
  },
  forgotText: {
    color: theme.colors.link,
    fontSize: theme.typography.fontSize.sm
  }
});
