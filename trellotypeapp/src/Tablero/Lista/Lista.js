import React, {useState} from 'react';

import Tarjeta from './Tarjeta/Tarjeta';
import {firestore} from 'firebase.js';

const Lista = () => {
    const [tarjetas, setTarjetas] = useState([]);
    const [nuevaTarjeta, setNuevaTarjeta] = useState('');
  
    useEffect(() => {
      // Obtener las tarjetas desde Firestore al cargar el componente
      const obtenerTarjetas = async () => {
        try {
          const tarjetasSnapshot = await firestore.collection('tarjetas').get();
          const tarjetasData = tarjetasSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTarjetas(tarjetasData);
        } catch (error) {
          console.error('Error al obtener tarjetas', error.message);
        }
      };
  
      obtenerTarjetas();
    }, []);
  
    const agregarTarjeta = async () => {
      try {
        // Agregar una nueva tarjeta a Firestore
        await firestore.collection('tarjetas').add({
          contenido: nuevaTarjeta,
        });
  
        // Actualizar la lista de tarjetas localmente
        setTarjetas([...tarjetas, { contenido: nuevaTarjeta }]);
        setNuevaTarjeta('');
      } catch (error) {
        console.error('Error al agregar tarjeta', error.message);
      }
    };
  
    return (
      <div className="lista">
        <h3>Lista de Tarjetas</h3>
        <ul>
          {tarjetas.map((tarjeta) => (
            <li key={tarjeta.id}>{tarjeta.contenido}</li>
          ))}
        </ul>
        <input
          type="text"
          value={nuevaTarjeta}
          onChange={(e) => setNuevaTarjeta(e.target.value)}
        />
        <button onClick={agregarTarjeta}>Agregar Tarjeta</button>
      </div>
    );
  };
  
  export default Lista;