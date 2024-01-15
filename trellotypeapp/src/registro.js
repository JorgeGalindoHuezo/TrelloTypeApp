import './App.css';

import React, { useState } from 'react';

import { auth } from './firebase';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      console.log('Usuario registrado exitosamente :)', userCredential.user);
    } catch (error) {
      console.error('Error al registrar usuario', error.message);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Contraseña:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
};

export default Registro;
