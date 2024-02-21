import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="login-container">
      <form id="login-form">
        <h2>Iniciar sesión</h2>
        <input type="text" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar sesión</button>
        <p className="register-link">
          ¿Nuevo por aquí?{" "}
          <a href="#" id="register-link">
            Regístrate
          </a>
        </p>
      </form>
      <form id="register-form" style={{ display: "none" }}>
        <h2>Registrarse</h2>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
        <p className="login-link">
          ¿Ya tienes una cuenta?{" "}
          <a href="#" id="login-link">
            Inicia sesión
          </a>
        </p>
      </form>
    </div>
  );
};
