import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

export const Register = () => {

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Registro</h2>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" placeholder="Crea tu usuario" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Ingresa tu correo" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Crea tu contraseña" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar Contraseña</label>
            <input type="password" id="confirm-password" placeholder="Confirma tu contraseña" />
          </div>
          <button type="submit" className="submit-button">Registrar</button>
        </form>
        <div className="login-link">
          <Link to="/home">¿Ya tienes cuenta? Inicia Sesión</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
