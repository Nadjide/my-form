import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { validateForm } from '../../utils/validation';
import Toaster from '../components/Toaster';

/**
 * @component Form
 * @description Composant de formulaire d'inscription avec validation
 */
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
    const [toaster, setToaster] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCloseToaster = () => {
        setToaster({ ...toaster, open: false });
    };

    useEffect(() => {
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        setIsFormValid(Object.keys(validationErrors).length === 0);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            try {
                localStorage.setItem('formData', JSON.stringify(formData));
                setToaster({
                    open: true,
                    message: 'Formulaire soumis avec succès',
                    severity: 'success'
                });
                setFormData({
                    nom: '',
                    prenom: '',
                    email: '',
                    dateNaissance: '',
                    ville: '',
                    codePostal: ''
                });
            } catch (error) {
                setToaster({
                    open: true,
                    message: 'Erreur lors de la sauvegarde',
                    severity: 'error'
                });
            }
        } else {
            setToaster({
                open: true,
                message: 'Veuillez corriger les erreurs dans le formulaire',
                severity: 'error'
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
            <Button 
                variant="contained" 
                color="primary" 
                type="submit" 
                disabled={!isFormValid}
            >
                Envoyer
            </Button>
            <Toaster
                open={toaster.open}
                message={toaster.message}
                severity={toaster.severity}
                onClose={handleCloseToaster}
            />
        </Box>
    );
}

export default Form;