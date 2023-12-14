export const loginLink = '#login2';
export const usernameInput = '#loginusername';
export const passwordInput = '#loginpassword';
export const loginButton = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';

// Opcionalmente, puedes definir funciones para obtener selectores dinámicos:

export function getLoginErrorMessage() {
  return '#logInModal > .modal-dialog > .modal-content > .sweet-alert > h2';
}