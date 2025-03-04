import React, { useState, useEffect, useCallback } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function Form() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        dateNaissance: '',
        ville: '',
        codePostal: ''
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = useCallback(() => {
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const codePostalRegex = /^[0-9]{5}$/;
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
        const today = new Date();
        const birthDate = new Date(formData.dateNaissance);
        const age = today.getFullYear() - birthDate.getFullYear();

        if (!formData.nom) tempErrors.nom = "Nom est requis";
        else if (!nameRegex.test(formData.nom)) tempErrors.nom = "Nom invalide";

        if (!formData.prenom) tempErrors.prenom = "Prénom est requis";
        else if (!nameRegex.test(formData.prenom)) tempErrors.prenom = "Prénom invalide";

        if (!emailRegex.test(formData.email)) tempErrors.email = "Email invalide";
        if (age < 18) tempErrors.dateNaissance = "Vous devez avoir au moins 18 ans";
        if (!codePostalRegex.test(formData.codePostal)) tempErrors.codePostal = "Code postal invalide";
        if (!formData.ville) tempErrors.ville = "Ville invalide";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }, [formData]);

    useEffect(() => {
        setIsFormValid(validate());
    }, [formData, validate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            localStorage.setItem('formData', JSON.stringify(formData));
            setSuccessMessage('Formulaire soumis avec succès');
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                dateNaissance: '',
                ville: '',
                codePostal: ''
            });
        }
    };

    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleSubmit}>
            <TextField
                label="Nom"
                variant="outlined"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                error={!!errors.nom}
                helperText={errors.nom}
            />
            <TextField
                label="Prenom"
                variant="outlined"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                error={!!errors.prenom}
                helperText={errors.prenom}
            />
            <TextField
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
            />
            <TextField
                label="Date de naissance"
                variant="outlined"
                type="date"
                name="dateNaissance"
                value={formData.dateNaissance}
                onChange={handleChange}
                slotProps={{ inputLabel: { shrink: true } }}
                error={!!errors.dateNaissance}
                helperText={errors.dateNaissance}
            />
            <TextField
                label="Ville"
                variant="outlined"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                error={!!errors.ville}
                helperText={errors.ville}
            />
            <TextField
                label="Code postal"
                variant="outlined"
                name="codePostal"
                value={formData.codePostal}
                onChange={handleChange}
                error={!!errors.codePostal}
                helperText={errors.codePostal}
            />
            <Button variant="contained" color="primary" type="submit" disabled={!isFormValid}>Envoyer</Button>
            {successMessage && <Typography color="success">{successMessage}</Typography>}
        </Box>
    );
}

export default Form;