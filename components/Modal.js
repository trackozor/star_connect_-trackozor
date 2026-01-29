/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Modal.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Composant Modal réutilisable avec overlay, animation et design system
 * Historique   : 1.0.0 - Version initiale
 *                1.1.0 - Ajout des commentaires et nettoyage pro
 * =============================================================================
 */

import React from 'react';
import {
  Modal as RNModal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import theme from '../theme';

/**
 * Affiche une fenêtre modale avec contenu personnalisé
 *
 * @component
 * @param {Object} props
 * @param {boolean} props.visible - Contrôle la visibilité de la modal
 * @param {Function} props.onClose - Callback appelé à la fermeture
 * @param {string} props.title - Titre affiché en haut de la modal
 * @param {React.ReactNode} props.children - Contenu de la modal
 */
export default function Modal({ visible, onClose, title, children }) {
  return (
    <RNModal animationType="slide" transparent visible={visible}>
      {/* Overlay semi-transparent */}
      <View style={styles.overlay}>
        {/* Conteneur principal */}
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.content}>{children}</View>

          {/* Bouton de fermeture */}
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: '85%',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    elevation: 4
  },
  title: {
    fontSize: theme.typography.title,
    marginBottom: theme.spacing.sm,
    color: theme.colors.primary
  },
  content: {
    marginBottom: theme.spacing.md
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    alignSelf: 'flex-end'
  },
  buttonText: {
    color: theme.colors.onPrimary,
    fontWeight: 'bold'
  }
});
