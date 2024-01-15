import './App.css';

import React, { useState } from 'react';

import { auth } from './firebase';

const InicioSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInicioSesion = async () => {
        try{
            await auth.signInWithEmailandPassword(email, password);
            console.log('Sesión iniciada correctamente!');
        }   catch (error){
            alert('Inicio de sesión fallido', error.message);
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className='loginContainer'>
            <h2>Iniciar Sesión</h2>
            <label>Correo: </label>
            <input type = "email" value = {email}  onChange= {(e) => setEmail(e.target.value)} />
            <label>Contraseña: </label>
            <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
            <button onClick = {handleInicioSesion} > Iniciar Sesión </button>
        </div>
    );
};

export default InicioSesion;
