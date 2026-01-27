/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Logo.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Logo AGERIS centralisé pour usage global
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';

/**
 * Affiche le logo principal AGERIS.
 *
 * @component
 * @example
 * return <Logo size={100} />
 *
 * @param {Object} props
 * @param {number} [props.size=80] - Taille du logo (hauteur + largeur)
 */
export default function Logo({ size = 80 }) {
  return (
    <Image
      source={require('../assets/logo.png')}
      style={[styles.logo, { width: size, height: size }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 20
  }
});
