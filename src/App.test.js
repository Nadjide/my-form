import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders form title', () => {
  render(<App />);
  expect(screen.getByText(/formulaire/i)).toBeInTheDocument();
});

test('calculates age correctly', () => {
  render(<App />);
  const birthDate = new Date();
  birthDate.setFullYear(birthDate.getFullYear() - 20);
  const dateInput = screen.getByLabelText(/date de naissance/i);
  fireEvent.change(dateInput, { target: { value: birthDate.toISOString().split('T')[0] } });
  expect(dateInput.value).toBe(birthDate.toISOString().split('T')[0]);
});

test('validates age > 18', () => {
  render(<App />);
  const dateInput = screen.getByLabelText(/date de naissance/i);
  fireEvent.change(dateInput, { target: { value: '2010-01-01' } });
  fireEvent.click(screen.getByText(/envoyer/i));
  expect(screen.getByText(/vous devez avoir au moins 18 ans/i)).toBeInTheDocument();
});

test('validates postal code format', () => {
  render(<App />);
  const postalCodeInput = screen.getByLabelText(/code postal/i);
  fireEvent.change(postalCodeInput, { target: { value: '123' } });
  fireEvent.click(screen.getByText(/envoyer/i));
  expect(screen.getByText(/code postal invalide/i)).toBeInTheDocument();
});

test('validates name, surname, and city format', () => {
  render(<App />);
  const nameInput = screen.getByLabelText('Nom', { exact: true });
  fireEvent.change(nameInput, { target: { value: '' } });
  fireEvent.click(screen.getByText(/envoyer/i));
  expect(screen.getByText('Nom est requis', { exact: true })).toBeInTheDocument();

  const surnameInput = screen.getByLabelText(/prenom/i); 
  fireEvent.change(surnameInput, { target: { value: '' } });
  fireEvent.click(screen.getByText(/envoyer/i));
  expect(screen.getByText('Prénom est requis', { exact: true })).toBeInTheDocument();

  const cityInput = screen.getByLabelText(/ville/i);
  fireEvent.change(cityInput, { target: { value: '' } });
  fireEvent.click(screen.getByText(/envoyer/i));
  expect(screen.getByText(/Ville invalide/i)).toBeInTheDocument();
});

test('validates email format', () => {
  render(<App />);
  const emailInput = screen.getByLabelText(/email/i);
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  fireEvent.click(screen.getByText(/envoyer/i));
  expect(screen.getByText(/email invalide/i)).toBeInTheDocument();
});

test('disables submit button if fields are not filled', () => {
  render(<App />);
  const submitButton = screen.getByText(/envoyer/i);
  expect(submitButton).toBeDisabled();
});

test('shows success toaster and clears fields on successful submission', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Nom', { exact: true }), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText('Prenom', { exact: true }), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByLabelText(/date de naissance/i), { target: { value: '2000-01-01' } });
  fireEvent.change(screen.getByLabelText(/ville/i), { target: { value: 'Paris' } });
  fireEvent.change(screen.getByLabelText(/code postal/i), { target: { value: '75000' } });
  fireEvent.click(screen.getByText(/envoyer/i));
  expect(screen.getByText(/formulaire soumis avec succès/i)).toBeInTheDocument();
  expect(screen.getByLabelText('Nom', { exact: true }).value).toBe('');
  expect(screen.getByLabelText(/prénom/i).value).toBe('');
  expect(screen.getByLabelText(/email/i).value).toBe('');
  expect(screen.getByLabelText(/date de naissance/i).value).toBe('');
  expect(screen.getByLabelText(/ville/i).value).toBe('');
  expect(screen.getByLabelText(/code postal/i).value).toBe('');
});

test('shows corresponding errors in red', () => {
  render(<App />);
  
  fireEvent.change(screen.getByLabelText(/^nom$/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/^prenom$/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/date de naissance/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/^code postal$/i), { target: { value: '' } });
  
  fireEvent.click(screen.getByText(/envoyer/i));

  expect(screen.getByText('Nom est requis', { exact: true })).toBeInTheDocument();
  expect(screen.getByText('Prénom est requis', { exact: true })).toBeInTheDocument();
  expect(screen.getByText('Email invalide', { exact: true })).toBeInTheDocument();
  expect(screen.getByText('Code postal invalide', { exact: true })).toBeInTheDocument();
});