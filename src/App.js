import React, { useState, useEffect } from 'react';
import { getDifficulties, getQuestions, postAnswer } from './api';
import DifficultySelector from './components/DifficultySelector';
import Question from './components/Question';
import Result from './components/Result';
import './App.css'; 

const App = () => {
  const [difficulties, setDifficulties] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDifficulties = async () => {
      const data = await getDifficulties();
      setDifficulties(data);
    };
    fetchDifficulties();
  }, []);

  const startGame = async (selectedDifficulty) => {
    setLoading(true);
    setDifficulty(selectedDifficulty);
    const data = await getQuestions(selectedDifficulty);
    console.log(data); 
    setQuestions(Object.values(data));
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setLoading(false);
  };

  const handleAnswer = async (questionId, optionKey) => {
    try {
      const result = await postAnswer(questionId, optionKey);
      console.log('Answer Result App.js:', result);  
      if (result.answer === true) {
        setScore((prevScore) => prevScore + 1);
      }
      return result;
      
    } catch (error) {
      console.error('Error al enviar la respuesta:', error);
    }
  };
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true); 
    }
  };
  return (
    <div className="App">
      {!difficulty && (
        <DifficultySelector difficulties={difficulties} onSelectDifficulty={startGame} />
      )}
      {difficulty && loading && <p>Cargando preguntas...</p>}
      {difficulty && !loading && !gameOver && questions.length > 0 && (
        <Question 
          question={questions[currentQuestionIndex]} 
          onAnswer={handleAnswer} 
          onNextQuestion={goToNextQuestion} 
        />
      )}
      {gameOver && (
        <Result score={score} total={questions.length} onRestart={() => setDifficulty('')} />
      )}
    </div>
  );
};

export default App;
