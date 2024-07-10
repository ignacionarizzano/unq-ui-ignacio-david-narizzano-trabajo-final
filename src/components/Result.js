import React from 'react';

const Result = ({ score, total, onRestart }) => (
  <div>
    <h2>Resultado Final</h2>
    <p>Puntaje: {score} de {total}</p>
    <button onClick={onRestart}>Reiniciar</button>
  </div>
);

export default Result;
