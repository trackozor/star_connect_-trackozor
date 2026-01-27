/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : App.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Fichier principal de l'application mobile React Native
 *                - Initialisation de la navigation
 *                - Wrapping général de l'application
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

