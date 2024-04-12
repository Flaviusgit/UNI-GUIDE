import React, { useState, useEffect } from 'react';

export default function Quiz() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [displayedQuestionIndices, setDisplayedQuestionIndices] = useState([]);

  useEffect(() => {
    async function fetchRandomQuestion() {
      try {
        const response = await fetch('/api/quiz/getQuestion');
        if (!response.ok) {
          throw new Error('Failed to fetch random question');
        }
        const data = await response.json();
        setCurrentQuestion(data);
        setStartQuiz(true);
      } catch (error) {
        console.error('Error fetching random question:', error);
      }
    }

    if (startQuiz && !currentQuestion) {
      fetchRandomQuestion();
    }
  }, [startQuiz, currentQuestion]);

  const handleNextQuestion = () => {
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    setCurrentQuestion(null); 
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(answeredQuestions[currentQuestionIndex - 2]); 
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  useEffect(() => {
    async function fetchRandomQuestion() {
      try {
        const response = await fetch('/api/quiz/getQuestion');
        if (!response.ok) {
          throw new Error('Failed to fetch random question');
        }
        const data = await response.json();
        if (answeredQuestions.some(ansQuestion => ansQuestion._id === data._id)) {
          console.log('Intrebarea a mai fost afisata anterior. Se cauta alta intrebare...');
          fetchRandomQuestion(); 
        } else {
          setCurrentQuestion(data);
          setStartQuiz(true);
        }
      } catch (error) {
        console.error('Error fetching random question:', error);
      }
    }
  
    if (startQuiz && !currentQuestion) {
      fetchRandomQuestion();
    }
  }, [startQuiz, currentQuestion, answeredQuestions]);
  
  

 
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Quiz</h1>
        {!startQuiz ? (
          <div>
            <p className="text-lg mb-4 whitespace-nowrap">Pentru a începe testul, apăsați butonul de mai jos.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setStartQuiz(true)}
            >
              Start Quiz
            </button>
          </div>
        ) : (
          <div> 
            <p className="text-lg">{currentQuestionIndex}.{currentQuestion?.text}</p>
            <ul>
              {currentQuestion?.options.map((option, index) => (
                <li key={index}>
                  <label className="inline-flex items-center mt-3">
                    <input type="radio" className="form-radio" name="option" value={option} />
                    <span className="ml-2">{option}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              {currentQuestionIndex !== 1 && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 mr-2"
                  onClick={handlePreviousQuestion}
                >
                  Back
                </button>
              )}
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-${currentQuestionIndex === 1 ? 'full' : '1/2'} ml-${currentQuestionIndex === 1 ? '0' : '2'}`}
                onClick={handleNextQuestion}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
