import React from 'react';
import '../App.css';

const DifficultySelector = ({ difficulties, onSelectDifficulty }) => {
  return (
    <div className="difficulty-selector">
      <h2 className="selector-title">Selecciona la dificultad</h2>
      <div className="difficulty-buttons">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty}
            className="difficulty-button"
            onClick={() => onSelectDifficulty(difficulty)}
          >
            {difficulty}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;
