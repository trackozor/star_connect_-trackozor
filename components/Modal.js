/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : components/Modal.js
 * Auteur       : Trackozor
 * Date         : 28/01/2026
 * Version      : 1.2.0
 * Statut       : Stable
 * Description  : Composant Modal réutilisable avec overlay, animation et design system
 * Historique   : 1.0.0 - Version initiale
 *                1.1.0 - Ajout des commentaires et nettoyage pro
 *                1.2.0 - Accessibilité, testID, props dynamiques
 * =============================================================================
 */

import React from 'react';
import {
  Modal as RNModal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { theme } from '../theme';

/**
 * Composant Modal réutilisable pour affichage de contenu contextuel.
 *
 * @component
 * @param {Object} props - Props du composant
 * @param {boolean} props.visible - Contrôle la visibilité de la modal
 * @param {Function} props.onClose - Fonction appelée à la fermeture
 * @param {string} props.title - Titre affiché en haut de la modal
 * @param {React.ReactNode} props.children - Contenu dynamique à afficher
 * @param {string} [props.closeLabel="Fermer"] - Texte du bouton de fermeture
 * @param {string} [props.accessibilityLabel] - Label personnalisé pour lecteur d'écran
 * @param {string} [props.testID] - ID pour les tests automatisés
 * @returns {JSX.Element}
 */
export default function Modal({
  visible,
  onClose,
  title,
  children,
  closeLabel = 'Fermer',
  accessibilityLabel,
  testID,
}) {
  return (
    <RNModal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose} // nécessaire pour Android
      accessibilityViewIsModal
    >
      {/* =================================================================== */}
      {/* Overlay semi-transparent */}
      {/* =================================================================== */}
      <View
        style={styles.overlay}
        accessible
        accessibilityRole="dialog"
        accessibilityLabel={accessibilityLabel || `Fenêtre modale : ${title}`}
        testID={testID || 'Modal'}
      >
        {/* ============================= */}
        {/* Conteneur principal de la modal */}
        {/* ============================= */}
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.content}>{children}</View>

          {/* Bouton de fermeture */}
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>{closeLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
}

// ============================================================================
//  Styles
// ============================================================================
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '85%',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.sm,
    color: theme.colors.primary,
  },
  content: {
    marginBottom: theme.spacing.md,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: theme.colors.onPrimary,
    fontWeight: 'bold',
  },
});
