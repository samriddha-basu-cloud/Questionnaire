import React, { useState } from 'react';
import GradeAnswers from '../components/Panel/GradeAnswers';

const PanelPage = () => {
  const [answers] = useState([
    { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { question: "Explain Tailwind CSS.", answer: "A utility-first CSS framework for rapid UI development." }
  ]);
  const [grades, setGrades] = useState([]);

  const gradeAnswer = (index, grade) => {
    const newGrades = [...grades];
    newGrades[index] = grade;
    setGrades(newGrades);
  };

  return (
    <div className="p-4">
      <GradeAnswers answers={answers} gradeAnswer={gradeAnswer} />
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Grades</h2>
        <ul>
          {answers.map((answer, index) => (
            <li key={index} className="border p-2 mb-2">
              <p><strong>Question:</strong> {answer.question}</p>
              <p><strong>Answer:</strong> {answer.answer}</p>
              <p><strong>Grade:</strong> {grades[index]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PanelPage;
