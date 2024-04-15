import React, { useState } from 'react';
import { Button } from 'flowbite-react';

export default function Quiz() {
  const [username, setUsername] = useState('');
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState([]); 
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/quiz/getQuestion'); 
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      setQuestions(data);  
      setCurrentQuestion(data[0]); 
      setSelectedOption('');
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleStartQuiz = (event) => {
    event.preventDefault();
    setStartQuiz(true);
    fetchQuestions();
  };

  const handleNextQuestion = () => {
    const nextIndex = questionIndex + 1;
    if (nextIndex < questions.length) {
      setQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
    } else {
      alert('Ai ajuns la finalul quizului!');
    }
  };

  const handlePreviousQuestion = () => {
    const previousIndex = questionIndex - 1;
    if (previousIndex >= 0) {
      setQuestionIndex(previousIndex);
      setCurrentQuestion(questions[previousIndex]);
    }
  };
  
  const handleRestartQuiz = () => {
    setStartQuiz(false);
    setCurrentQuestion(null);
    setSelectedOption('');
    setQuestionIndex(0);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-6xl p-8 bg-gray-800 text-white rounded-lg shadow-lg">
        <div className="w-3/4 mx-auto pb-8">
          {startQuiz && currentQuestion ? (
            <div>
              <h1 className="text-3xl text-center font-semibold border-b-2 border-green-500 pb-2">
                {questionIndex + 1}. {currentQuestion.text}
              </h1>
              <div className="mt-6">
                <div className="mt-4 space-y-2">
                  {currentQuestion.options.map((option, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 mb-4 ml-4">
                {questionIndex !== 0 ? (
                  <Button 
                    gradientDuoTone="purpleToBlue"
                    onClick={handlePreviousQuestion}
                    className="text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Înapoi
                  </Button>
                ) : (
                  <Button 
                    gradientDuoTone="Red"
                    onClick={handleRestartQuiz}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Închide
                  </Button>
                )}
              </div>
              <div className="absolute bottom-0 right-0 mb-4 mr-4">
                <Button
                  gradientDuoTone="greenToBlue"
                  onClick={handleNextQuestion}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Înainte
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleStartQuiz} className={startQuiz ? "hidden" : "space-y-4"}>
              <h1 className="text-3xl text-center font-semibold border-b-2 border-green-500 pb-2">
                Quiz Application
              </h1>
              <ul className="list-disc text-sm space-y-2 mt-4 ml-5">
                <li>Testul conține 12 întrebări.</li>
                <li>Fiecare întrebare are 4 opțiuni de răspuns, unul singur fiind corect.</li>
                <li>Poți să navighezi prin întrebări înainte să finalizezi testul.</li>
                <li>Rezultatele o să fie afișate la final.</li>
              </ul>
              <div className="flex items-center mt-4">
                <input 
                  type="text" 
                  id="username" 
                  name="username"
                  placeholder="Username" 
                  className="w-1/2 p-2 text-black rounded-lg" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required 
                />
                <button 
                  type="submit"
                  className="w-1/2 ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Start Quiz
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
