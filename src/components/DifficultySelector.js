import React from 'react';

const DifficultySelector = ({ difficulties, onSelectDifficulty }) => {
  return (
    <div>
      <h2>Selecciona la dificultad</h2>
      {difficulties.map((difficulty) => (
        <button key={difficulty} onClick={() => onSelectDifficulty(difficulty)}>
          {difficulty}
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
