/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Avatar.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Composant Avatar pour utilisateur (photo ou initiales fallback)
 * Historique   : 1.0.0 - Version initiale
 *                1.1.0 - Refactor complet avec JS Doc et commentaires
 * =============================================================================
 */

import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import theme from '../theme';

/**
 * Affiche un avatar avec image ou initiales
 *
 * @component
 * @param {Object} props
 * @param {string} props.uri - URL de la photo (optionnel)
 * @param {string} props.initials - Initiales à afficher si pas d'image
 * @param {number} [props.size=48] - Taille de l'avatar
 */
export default function Avatar({ uri, initials, size = 48 }) {
  return (
    <View style={[styles.avatar, {
      width: size,
      height: size,
      borderRadius: size / 2
    }]}>
      {/* Affiche l'image si disponible, sinon les initiales */}
      {uri ? (
        <Image
          source={{ uri }}
          style={{ width: size, height: size, borderRadius: size / 2 }}
        />
      ) : (
        <Text style={styles.initials}>{initials}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  initials: {
    color: theme.colors.onSecondary,
    fontSize: theme.typography.title,
    fontWeight: 'bold'
  }
});
