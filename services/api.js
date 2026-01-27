/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : services/api.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Service centralisé pour les appels à l'API Laravel
 * Historique   : 1.0.0 - Création initiale
 * =============================================================================
 */

import axios from 'axios';

const API_BASE = process.env.API_URL || 'http://localhost:8000/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE}/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('[API][login] Erreur :', error.message);
    return null;
  }
};
