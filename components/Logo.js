/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Logo.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Logo AGERIS centralisé pour usage global
 * Historique   : 1.0.0 - Création initiale
 *                1.1.0 - Accessibilité, testID, style dynamique
 * =============================================================================
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';

/**
 * Composant Logo central de l'application.
 *
 * @component
 * @example
 * return <Logo size={100} />
 *
 * @param {Object} props - Props du composant
 * @param {number} [props.size=80] - Taille (largeur/hauteur) du logo
 * @param {Object} [props.style] - Style externe à fusionner
 * @param {string} [props.accessibilityLabel] - Label pour lecteur d'écran
 * @param {string} [props.testID] - ID pour tests automatisés
 * @returns {JSX.Element}
 */
export default function Logo({
  size = 80,
  style,
  accessibilityLabel,
  testID,
}) {
  return (
    <Image
      source={require('../assets/logo/logo.webp')}
      style={[styles.logo, { width: size, height: size }, style]}
      resizeMode="contain"
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel || 'Logo AGERIS'}
      testID={testID || 'Logo'}
    />
  );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  logo: {
    marginBottom: 20,
  },
});
