import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      // Aici vei face o cerere către server pentru a obține o întrebare reală din baza de date
      // În acest exemplu, vom simula datele
      const sampleQuestion = {
        text: 'Care este capitala României?',
        options: ['București', 'Budapesta', 'Sofia', 'Belgrad'],
      };
      setQuestion(sampleQuestion);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const handleAnswer = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Trimite răspunsul către server sau gestionează-l
  };

  return (
    <div>
      {question && (
        <form onSubmit={handleSubmit}>
          <h2>{question.text}</h2>
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleAnswer(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Quiz;
