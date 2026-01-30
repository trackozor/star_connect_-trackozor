/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : layout/index.js
 * Auteur       : Trackozor
 * Date         : 30/01/2026
 * Version      : 1.1.0
 * Statut       : Stable
 * Description  : Point d'export centralisé de tous les layouts applicatifs
 * Historique   : 1.0.0 - Export initial des layouts
 *                1.1.0 - Ajout des nouveaux wrappers utilitaires
 * =============================================================================
 */

// Layouts principaux
export { default as AppLayout } from './AppLayout';
export { default as AuthLayout } from './AuthLayout';
export { default as PageWrapper } from './PageWrapper';

// Wrappers utilitaires
export { default as KeyboardAvoidingWrapper } from './KeyboardAvoidingWrapper';
export { default as CenteredScreen } from './CenteredScreen';
