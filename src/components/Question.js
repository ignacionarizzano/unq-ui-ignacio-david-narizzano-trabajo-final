import React, { useState } from 'react';
import '../App.css'; 

const Question = ({ question, onAnswer, onNextQuestion }) => {
  const [buttonStyles, setButtonStyles] = useState(Array(4).fill('option-button'));

  if (!question) {
    return <p>Cargando pregunta...</p>;
  }

  const { id, question: questionText, option1, option2, option3, option4 } = question;

  const handleAnswer = async (optionKey, index) => {
    try {
      const result = await onAnswer(id, optionKey);
      console.log('Answer Result:', result);

      const newButtonStyles = [...buttonStyles];
      if (result && result.answer === true) {
        newButtonStyles[index] = 'option-button correct';
      } else {
        newButtonStyles[index] = 'option-button wrong';
      }
      setButtonStyles(newButtonStyles);

      setTimeout(() => {
        if (index <= 3) {
          setButtonStyles(Array(4).fill('option-button'));
          onNextQuestion(); 
        } else {
          
        }
      }, 1000); 
    } catch (error) {
      console.error('Error al enviar la respuesta:', error);
    }
  };

  return (
    <div className="container">
      <div className="question-container">
        <h2 className="question-text">{questionText}</h2>
      </div>
      <div className="options-container">
        <button className={buttonStyles[0]} onClick={() => handleAnswer('option1', 0)}>{option1}</button>
        <button className={buttonStyles[1]} onClick={() => handleAnswer('option2', 1)}>{option2}</button>
        <button className={buttonStyles[2]} onClick={() => handleAnswer('option3', 2)}>{option3}</button>
        <button className={buttonStyles[3]} onClick={() => handleAnswer('option4', 3)}>{option4}</button>
      </div>
    </div>
  );
};

export default Question;
