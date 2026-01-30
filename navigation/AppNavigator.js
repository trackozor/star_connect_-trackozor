/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : navigation/AppNavigator.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Stack principale conditionnelle selon état auth
 * Historique   : 1.0.0 - Création de l’arborescence navigation principale
 * =============================================================================
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import HomeScreen from '../screens/HomeScreen';
import { ROUTES } from './routes';

const Stack = createNativeStackNavigator();

/**
 * Navigation principale avec logique conditionnelle (auth vs app).
 * Remplacer isAuthenticated par un vrai état utilisateur plus tard.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function AppNavigator() {
  const isAuthenticated = false; // TODO: connecter au contexte utilisateur

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
            <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
        ) : (
            <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
        </Stack.Navigator>
    );
}
