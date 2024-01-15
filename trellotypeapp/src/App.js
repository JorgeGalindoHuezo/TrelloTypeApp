import './App.css';

// App.js
import React, { useState } from 'react';

import InicioSesion from './login';
import Registro from './registro';

// Importa tu archivo de estilos CSS aquí

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header>
        
      </header>

      <div className="auth-container">
        {!isLoggedIn ? (
          <div className="auth-form">
            <InicioSesion onLogin={handleLogin} />
            <Registro />
          </div>
        ) : (
          <div className="welcome-container">
            <h2>Bienvenido</h2>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
