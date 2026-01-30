/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Avatar.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.1.1
 * Statut       : Stable
 * Description  : Composant Avatar utilisateur (photo ou initiales en fallback)
 * Historique   : 1.0.0 - Version initiale
 *                1.1.0 - Refactor avec JSDoc
 *                1.1.1 - Normalisation style + accessibilité + testID
 * =============================================================================
 */

import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import {theme} from '../theme';

/**
 * Composant d'avatar utilisateur.
 * Affiche soit une image, soit les initiales en fallback.
 *
 * @component
 * @param {Object} props - Props du composant Avatar
 * @param {string} [props.uri] - URL de l'image utilisateur (optionnelle)
 * @param {string} props.initials - Initiales à afficher si l'image est absente
 * @param {number} [props.size=48] - Taille (largeur/hauteur) de l'avatar
 * @param {string} [props.accessibilityLabel] - Label pour lecteur d'écran
 * @param {string} [props.testID] - ID pour tests automatisés
 * @returns {JSX.Element}
 */
export default function Avatar({
  uri,
  initials,
  size = 48,
  accessibilityLabel,
  testID
}) {
  const radius = size / 2;

  return (
    <View
      style={[styles.avatar, { width: size, height: size, borderRadius: radius }]}
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel || (uri ? 'Avatar utilisateur' : `Initiales : ${initials}`)}
      testID={testID || 'Avatar'}
    >
      {uri ? (
        <Image
          source={{ uri }}
          style={{ width: size, height: size, borderRadius: radius }}
        />
      ) : (
        <Text style={[styles.initials, { fontSize: size / 2 }]}>{initials}</Text>
      )}
    </View>
  );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  avatar: {
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  initials: {
    color: theme.colors.onSecondary,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
