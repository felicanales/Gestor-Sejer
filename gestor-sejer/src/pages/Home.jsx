import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './Home.css'; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" placeholder="Ingresa tu usuario" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" />
          </div>
          <button type="submit" className="submit-button">Iniciar Sesión</button>
        </form>
        <div className="register-link">
          <Link to="/register">¿No tienes cuenta? Regístrate</Link> {/* Cambia a Link */}
        </div>
      </div>
    </div>
  );
};

export default Login;
