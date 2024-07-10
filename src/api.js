import axios from 'axios';

const API_URL = 'https://preguntados-api.vercel.app';

export const getDifficulties = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/difficulty`);
    return response.data;
  } catch (error) {
    console.error('Error fetching difficulties:', error);
    throw error;
  }
};

export const getQuestions = async (difficulty = 'easy') => {
  try {
    const response = await axios.get(`${API_URL}/api/questions`, {
      params: { difficulty },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching questions for difficulty "${difficulty}":`, error);
    throw error;
  }
};

export const postAnswer = async (questionId, optionKey) => {
  try {
    console.log('Sending Answer:', { questionId, optionKey });
    const response = await axios.post(`${API_URL}/api/answer`, { questionId, option: optionKey });
    return response.data;
  } catch (error) {
    console.error('Error posting answer:', error);
    throw error;
  }
};
