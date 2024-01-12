import React, {useState} from 'react';

const Tarjeta = ({ titulo, contenido }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoContenido, setNuevoContenido] = useState(contenido);

  const guardarCambios = () => {
    setEditando(false);
  };

  return (
    <div className="tarjeta">
      {editando ? (
        <div>
          <textarea
            value={nuevoContenido}
            onChange={(e) => setNuevoContenido(e.target.value)}
          />
          <button onClick={guardarCambios}>Guardar</button>
        </div>
      ) : (
        <div>
          <h4>{titulo}</h4>
          <p>{contenido}</p>
          <button onClick={() => setEditando(true)}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default Tarjeta;