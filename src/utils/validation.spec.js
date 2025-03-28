import {
    isAgeValid,
    isCodePostalValid,
    isNameValid,
    isEmailValid,
    validateForm
} from './validation';

describe('Validation Functions', () => {
    describe('isAgeValid', () => {
        it('should return true for age >= 18', () => {
            const today = new Date();
            const birthDate = new Date();
            birthDate.setFullYear(today.getFullYear() - 20);
            expect(isAgeValid(birthDate.toISOString().split('T')[0])).toBe(true);
        });

        it('should return false for age < 18', () => {
            const today = new Date();
            const birthDate = new Date();
            birthDate.setFullYear(today.getFullYear() - 15);
            expect(isAgeValid(birthDate.toISOString().split('T')[0])).toBe(false);
        });
    });

    describe('isCodePostalValid', () => {
        it('should return true for valid French postal code', () => {
            expect(isCodePostalValid('75000')).toBe(true);
            expect(isCodePostalValid('69001')).toBe(true);
            expect(isCodePostalValid('13001')).toBe(true);
        });

        it('should return false for invalid postal code', () => {
            expect(isCodePostalValid('123')).toBe(false);
            expect(isCodePostalValid('123456')).toBe(false);
            expect(isCodePostalValid('abcde')).toBe(false);
        });
    });

    describe('isNameValid', () => {
        it('should return true for valid names', () => {
            expect(isNameValid('Jean')).toBe(true);
            expect(isNameValid('Marie-Josée')).toBe(true);
            expect(isNameValid('François')).toBe(true);
            expect(isNameValid('Jean-Pierre')).toBe(true);
        });

        it('should return false for invalid names', () => {
            expect(isNameValid('Jean123')).toBe(false);
            expect(isNameValid('Marie@Josée')).toBe(false);
            expect(isNameValid('François!')).toBe(false);
        });
    });

    describe('isEmailValid', () => {
        it('should return true for valid emails', () => {
            expect(isEmailValid('test@example.com')).toBe(true);
            expect(isEmailValid('user.name@domain.co.uk')).toBe(true);
            expect(isEmailValid('user+tag@example.com')).toBe(true);
        });

        it('should return false for invalid emails', () => {
            expect(isEmailValid('invalid-email')).toBe(false);
            expect(isEmailValid('@domain.com')).toBe(false);
            expect(isEmailValid('user@')).toBe(false);
        });
    });

    describe('validateForm', () => {
        it('should return empty errors object for valid form data', () => {
            const validData = {
                nom: 'Dupont',
                prenom: 'Jean',
                email: 'jean.dupont@example.com',
                dateNaissance: '2000-01-01',
                ville: 'Paris',
                codePostal: '75000'
            };
            expect(validateForm(validData)).toEqual({});
        });

        it('should return errors for invalid form data', () => {
            const invalidData = {
                nom: 'Dupont123',
                prenom: '',
                email: 'invalid-email',
                dateNaissance: '2010-01-01',
                ville: '',
                codePostal: '123'
            };
            const errors = validateForm(invalidData);
            expect(errors.nom).toBe('Nom invalide');
            expect(errors.prenom).toBe('Prénom est requis');
            expect(errors.email).toBe('Email invalide');
            expect(errors.dateNaissance).toBe('Vous devez avoir au moins 18 ans');
            expect(errors.ville).toBe('Ville est requise');
            expect(errors.codePostal).toBe('Code postal invalide');
        });
    });
}); 