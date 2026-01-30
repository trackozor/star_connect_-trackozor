/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : screens/LoginScreen.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.2.1
 * Statut       : Stable
 * Description  : Écran de connexion utilisateur
 *                - Champs email / mot de passe
 *                - Lien "Mot de passe oublié"
 *                - Bouton de connexion sans simulation
 *                - Header, Footer, AuthLayout
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Ajout JSDoc + refonte
 *                1.2.0 - Ajout lien réinitialisation + Header/Footer
 *                1.2.1 - Suppression de la simulation de connexion
 * =============================================================================
 */

import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthLayout } from '../layouts';
import { TextField, Button, Header, Footer } from '../components';
import { theme } from '../theme';
import { ROUTES } from '../navigation';


// =============================================================================
// COMPOSANT : LoginScreen
// =============================================================================

/**
 * Interface d'authentification utilisateur.
 * @component
 * @param {Object} props
 * @param {object} props.navigation - Navigation React Navigation (injection native)
 * @returns {JSX.Element}
 */
export default function LoginScreen({ navigation }) {
  // ===========================================================================
  // ÉTATS LOCAUX
  // ===========================================================================

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // ===========================================================================
  // HANDLERS
  // ===========================================================================

  /**
   * Gère la tentative de connexion utilisateur.
   * À connecter à une API réelle plus tard.
   */
  const handleLogin = () => {
    console.log('Tentative de connexion :', { email, password });
  };

  /**
   * Redirige vers l’écran "Mot de passe oublié".
   */
  const handleForgotPassword = () => {
    navigation?.navigate(ROUTES.FORGOT_PASSWORD);
  };

  // ===========================================================================
  // RENDU
  // ===========================================================================

  return (
    <AuthLayout>
      <Header title="Connexion" />

      <TextField
        label="Adresse email"
        value={email}
        onChangeText={setEmail}
        placeholder="exemple@ageris.fr"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextField
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        secureTextEntry
      />

      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgot}>
        <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <Button
        label="Se connecter"
        onPress={handleLogin}
        loading={loading}
        disabled={!email || !password}
      />

      <Footer />
    </AuthLayout>
  );
}


// =============================================================================
// STYLES
// =============================================================================

const styles = StyleSheet.create({
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing.sm
  },
  forgotText: {
    color: theme.colors.link,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium
  }
});
