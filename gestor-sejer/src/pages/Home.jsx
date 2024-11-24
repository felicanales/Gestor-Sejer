import React, {useState} from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './Home.css'; 

const Login = () => {

  const [email, setEmail] = useState(""); // Estado para email
  const [password, setPassword] = useState(""); // Estado para contraseña
  const [error, setError] = useState(""); // Estado para errores

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token); // Guardar el token en localStorage
      window.location.href = "/dashboard"; // Redirigir al dashboard
    } catch (err) {
      setError(err.message); // Mostrar el mensaje de error
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email} // Enlazar con el estado
              onChange={(e) => setEmail(e.target.value)} // Actualizar estado
              placeholder="Ingresa tu correo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password} // Enlazar con el estado
              onChange={(e) => setPassword(e.target.value)} // Actualizar estado
              placeholder="Ingresa tu contraseña"
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar error */}
          <button type="submit" className="submit-button">
            Iniciar Sesión
          </button>
        </form>
        <div className="register-link">
          <Link to="/register">¿No tienes cuenta? Regístrate</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
