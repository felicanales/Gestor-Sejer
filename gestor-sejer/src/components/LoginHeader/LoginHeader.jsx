import React from 'react';
import './LoginHeader.css'; // Importa el archivo CSS

export const LoginHeader = () => {
  return (
    <header className="login-header">
      <img src="logo-sejer.png" alt="Logo SEJER" className="logo" />
      <h3>¡Bienvenido al Gestor de Sejer!</h3>
    </header>
  );
};

export default LoginHeader;
