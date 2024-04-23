import React, { useState } from 'react';
import { Button, Textarea } from 'flowbite-react';

export default function CreateQuestion() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOption, setCorrectOption] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!question.trim() || options.some(option => option.trim() === '') || !correctOption) {
            alert('Te rugăm să completezi toate câmpurile și să selectezi o opțiune corectă înainte de a adăuga întrebarea');
            return;
        }

        const response = await fetch('/api/quiz/addQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: question, options, correctOption }),
        });
        if (response.ok) {
            alert('Intrebarea a fost adaugata cu succes');
            resetForm();  
        }
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const resetForm = () => {
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectOption('');
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
                        Adaugă întrebare
                    </Button>
                    <Button type="button" onClick={resetForm} className="btn dark:bg-red-500 bg-red-500 hover:bg-red-700 !important text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out flex-1">
                        Resetează
                    </Button>
                </div>
            </form>
        </div>
    );
}
