import React from 'react';
import { Snackbar, Alert } from '@mui/material';

/**
 * @component Toaster
 * @description Composant pour afficher des notifications toast
 * @param {Object} props
 * @param {boolean} props.open - État d'ouverture du toaster
 * @param {string} props.message - Message à afficher
 * @param {('success'|'error')} props.severity - Type de notification
 * @param {Function} props.onClose - Fonction appelée à la fermeture
 */
const Toaster = ({ open, message, severity, onClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Toaster; 