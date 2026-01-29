/**
 * =============================================================================
 * Projet       : AGERIS MOBILE
 * Fichier      : __tests__/validators.test.js
 * Auteur       : Trackozor
 * Date         : 27/01/2026
 * Version      : 1.0.0
 * Statut       : Stable
 * Description  : Tests unitaires des fonctions de validation
 * Historique   : 1.0.0 - Création initiale des tests
 * =============================================================================
 */

import {
    isValidEmail,
    isValidPassword,
    isRequired,
    isMatch,
    validatePhoneNumber
} from '../utils/validators';

describe('🔒 VALIDATORS — Tests unitaires', () => {
/** =========================
* isValidEmail()
*============================**/
        describe('isValidEmail()', () => {
            test('Accepte un email valide', () => {
            expect(isValidEmail('john.doe@example.com')).toBe(true);
        });

        test('Refuse un email vide', () => {
            expect(isValidEmail('')).toBe(false);
        });

        test('Refuse un email sans @', () => {
            expect(isValidEmail('john.doe.example.com')).toBe(false);
        });

        test('Refuse les emails avec des points consécutifs', () => {
            expect(isValidEmail('john..doe@example.com')).toBe(false);
        });
    });

  // =========================
  // isValidPassword()
  // =========================
    describe('isValidPassword()', () => {
        test('Accepte un mot de passe fort', () => {
            expect(isValidPassword('StrongP@ssword2026!!')).toBe(true);
        });

        test('Refuse un mot de passe trop court', () => {
            expect(isValidPassword('Short1!')).toBe(false);
        });

        test('Refuse un mot de passe sans caractère spécial', () => {
            expect(isValidPassword('NoSpecialCharacter123')).toBe(false);
        });

        test('Refuse un mot de passe avec des espaces', () => {
            expect(isValidPassword('Pass word123!')).toBe(false);
        });
});

  // =========================
  // isRequired()
  // =========================
  describe('isRequired()', () => {
    test('Retourne vrai pour une chaîne non vide', () => {
      expect(isRequired('A')).toBe(true);
    });

    test('Retourne faux pour une chaîne vide', () => {
      expect(isRequired('')).toBe(false);
    });

    test('Retourne faux pour des espaces uniquement', () => {
      expect(isRequired('   ')).toBe(false);
    });
  });

  // =========================
  // isMatch()
  // =========================
  describe('isMatch()', () => {
    test('Retourne vrai si les deux chaînes sont identiques', () => {
      expect(isMatch('abc', 'abc')).toBe(true);
    });

    test('Retourne faux si les chaînes sont différentes', () => {
      expect(isMatch('abc', 'abcd')).toBe(false);
    });
  });

  // =========================
  // validatePhoneNumber()
  // =========================
  describe('validatePhoneNumber()', () => {
    test('Accepte un numéro FR valide (national)', () => {
      const result = validatePhoneNumber('0612345678');
      expect(result.valid).toBe(true);
      expect(result.normalized).toBe('+33612345678');
    });

    test('Accepte un numéro FR valide (international)', () => {
      const result = validatePhoneNumber('+33612345678');
      expect(result.valid).toBe(true);
    });

    test('Refuse un numéro vide', () => {
      const result = validatePhoneNumber('');
      expect(result.valid).toBe(false);
    });

    test('Refuse un numéro trop court', () => {
      const result = validatePhoneNumber('12345');
      expect(result.valid).toBe(false);
    });

    test('Refuse un numéro international mal formé', () => {
      const result = validatePhoneNumber('+99abcdef');
      expect(result.valid).toBe(false);
    });
  });
});
