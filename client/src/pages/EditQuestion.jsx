import React, { useState, useEffect } from 'react';
import { Button, Textarea } from 'flowbite-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditQuestion() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOption, setCorrectOption] = useState('');
    const [publishError, setPublishError] = useState(null);
    const navigate = useNavigate();
    const {questionId} = useParams();
   
    
    useEffect(() => {
        try {
          const fetchPost = async () => {
            const res = await fetch(`/api/quiz/getQuestion?questionId=${questionId}`);
            const data = await res.json();
            if (!res.ok) {
              console.log(data.message);
              setPublishError(data.message);
              return;
            }
            if (res.ok) {
              setPublishError(null);
              const fetchedQuestion = data.questions[0];
             setQuestion(fetchedQuestion.text);
             setOptions(fetchedQuestion.options);
             setCorrectOption(fetchedQuestion.correctOption);
            }
          };
      
          fetchPost();
        } catch (error) {
          console.log(error.message);
        }
      }, [questionId]);

const resetForm = () => {
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectOption('');
};
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!question.trim() || options.some(option => option.trim() === '') || !correctOption) {
            alert('Te rugăm să completezi toate câmpurile și să selectezi o opțiune corectă înainte de a adăuga întrebarea');
            return;
        }

        const response = await fetch(`/api/quiz/editQuestion/${questionId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: question, options:options, correctOption:correctOption }),
        });
        if (response.ok) {
            alert('Intrebarea a fost actualizată cu succes');
        }
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 w-full max-w-6xl rounded-lg shadow-lg flex flex-col items-center bg-white dark:bg-gray-900">
                <div className="w-full">
                    <Textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="textarea textarea-bordered w-full focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        placeholder="Introduceți întrebarea"
                        rows="4"
                    ></Textarea>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full ">
                    {options.map((option, index) => (
                        <input
                            key={index}
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            className="input input-bordered w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-900"
                            placeholder={`Opțiunea ${index + 1}`}
                        />
                    ))}
                </div>
                <div className="w-full">
                    <select
                        value={correctOption}
                        onChange={(e) => setCorrectOption(e.target.value)}
                        className="select select-bordered w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-900"
                    >
                        <option value="">Selectează răspunsul corect</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="flex space-x-6 w-full justify-center">
                    <Button 
                    type="submit" className="btn btn-primary dark:bg-blue-500 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out flex-1">
                        Actualizeaza întrebarea
                    </Button>
                    <Button type="button" onClick={resetForm} className="btn dark:bg-red-500 bg-red-500 hover:bg-red-700 !important text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out flex-1">
                        Resetează
                    </Button>
                </div>
            </form>
        </div>
    );
}
