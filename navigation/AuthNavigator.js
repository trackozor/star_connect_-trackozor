/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : navigation/AuthNavigator.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Stack de navigation pour les écrans d’authentification
 * Historique   : 1.0.0 - Stack Login/Signup
 * =============================================================================
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { ROUTES } from './ROUTES';

const Stack = createNativeStackNavigator();

/**
 * Navigation dédiée au flux d'authentification (non connecté).
 *
 * @component
 * @returns {JSX.Element}
 */
export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ROUTES.SIGNUP} component={SignupScreen} />
        </Stack.Navigator>
    );
}
