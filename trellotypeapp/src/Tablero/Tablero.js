import React, {useState} from 'react';

import Lista from './Lista/Lista';

const Tablero = () => {
    const [listas, setLIstas] = useState([
        {id: 1, titulo: 'Lista 1'},
    ]);

    const agregarLista = () => {
        const nuevaLista = {id: listas.length + 1, titulo: 'Lista nueva'};
        setLIstas({...listas, nuevaLista});
    };

    return (
        <div className='tablero'>
            <h2>Tablero</h2>
            <div className='container-listas'>
                {listas.map((lista) => (
                    <Lista key = {lista.id} titulo = {lista.titulo}/>
                ))}
            </div>
            <button onClick={agregarLista}>Agregar lista</button>
        </div>
    );
};

export default Tablero;