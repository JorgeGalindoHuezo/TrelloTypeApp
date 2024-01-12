import React, {useState} from 'react';

import Tarjeta from './Tarjeta/Tarjeta';

const Lista = () => {

    const [tarjetas, setTarjetas] = useState([
        { id:1, titulo: 'Tarjeta 1', contenido: 'Contenido en la tarjeta' },
    ]);

    const aregarTarjeta = () => {
        const nuevaTarjeta = { id: tarjetas.length + 1, titulo: 'Nueva Tarjeta', contenido: ''};
        setTarjetas([...tarjetas, nuevaTarjeta]);
    };

    return(
        <div className='lista'>
            <h3>TODO</h3>
            <div className='container-tarjetas'>
                {tarjetas.map((tarjeta) => (
                    <tarjeta key = {tarjeta.id} titulo = {tarjeta.titulo} contenido = {tarjeta.contenido} />
                ))}
            </div>
        </div>
    );

};

export default Lista;