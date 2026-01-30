/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : navigation/index.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.0.1
 * Statut       : Stable
 * Description  : Stack principal sans container (fourni au niveau racine)
 * Historique   : 1.0.0 - Initialisation
 *                1.0.1 - Suppression du NavigationContainer (double déclaration)
 * =============================================================================
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from './ROUTES';

import {
  LoginScreen,
  RegisterScreen,
  SplashScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen
} from '../screens';

const Stack = createNativeStackNavigator();

/**
 * @component AppNavigator
 * @description Définit les routes principales sans wrapper NavigationContainer
 * @returns {JSX.Element}
 */
export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.SPLASH}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
      {/* Ajouter ici d'autres écrans au besoin */}
    </Stack.Navigator>
  );
}

export { ROUTES };
