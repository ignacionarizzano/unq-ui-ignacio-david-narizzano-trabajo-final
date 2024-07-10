import React from 'react';

const Result = ({ score, total, onRestart, difficulty}) => (
  <div className="result-container">
    <h2>Partida finalizada</h2>
    <p className="result-message">
      {score <= 2 && "¡Faltó estudiar! 😬"}
      {score > 2 && score <= 5 && "¡La próxima irá mejor! 😉"}
      {score > 5 && score <= 9 && "¡Muy bien jugado! 😀"}
      {score === 10 && "¡No se puede hacer mejor! 😎"}
    </p>
    <p>Elegiste la dificultad: {difficulty}</p>
    <p>Tu puntaje fue: {score} de {total} </p>
    <button className="restart-button" onClick={onRestart}>Reiniciar</button>
  </div>
);

export default Result;
