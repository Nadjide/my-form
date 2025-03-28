/**
 * @fileoverview Fonctions de validation pour le formulaire d'inscription
 */

/**
 * Vérifie si l'âge est supérieur à 18 ans
 * @param {string} dateNaissance - Date de naissance au format YYYY-MM-DD
 * @returns {boolean} True si l'âge est supérieur à 18 ans
 */
export const isAgeValid = (dateNaissance) => {
    const today = new Date();
    const birthDate = new Date(dateNaissance);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 18;
};

/**
 * Vérifie si le code postal est au format français (5 chiffres)
 * @param {string} codePostal - Code postal à valider
 * @returns {boolean} True si le code postal est valide
 */
export const isCodePostalValid = (codePostal) => {
    const codePostalRegex = /^[0-9]{5}$/;
    return codePostalRegex.test(codePostal);
};

/**
 * Vérifie si le nom ou prénom est valide (lettres, accents, tirets, espaces)
 * @param {string} name - Nom ou prénom à valider
 * @returns {boolean} True si le nom est valide
 */
export const isNameValid = (name) => {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    return nameRegex.test(name);
};

/**
 * Vérifie si l'email est valide
 * @param {string} email - Email à valider
 * @returns {boolean} True si l'email est valide
 */
export const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Valide tous les champs du formulaire
 * @param {Object} formData - Données du formulaire
 * @returns {Object} Objet contenant les erreurs pour chaque champ
 */
export const validateForm = (formData) => {
    const errors = {};

    if (!formData.nom) {
        errors.nom = "Nom est requis";
    } else if (!isNameValid(formData.nom)) {
        errors.nom = "Nom invalide";
    }

    if (!formData.prenom) {
        errors.prenom = "Prénom est requis";
    } else if (!isNameValid(formData.prenom)) {
        errors.prenom = "Prénom invalide";
    }

    if (!formData.email) {
        errors.email = "Email est requis";
    } else if (!isEmailValid(formData.email)) {
        errors.email = "Email invalide";
    }

    if (!formData.dateNaissance) {
        errors.dateNaissance = "Date de naissance est requise";
    } else if (!isAgeValid(formData.dateNaissance)) {
        errors.dateNaissance = "Vous devez avoir au moins 18 ans";
    }

    if (!formData.ville) {
        errors.ville = "Ville est requise";
    }

    if (!formData.codePostal) {
        errors.codePostal = "Code postal est requis";
    } else if (!isCodePostalValid(formData.codePostal)) {
        errors.codePostal = "Code postal invalide";
    }

    return errors;
}; 