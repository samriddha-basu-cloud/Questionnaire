import React, { useState } from 'react';
import GradeAnswers from '../components/Panel/GradeAnswers';

/**
 * PanelPage component for grading answers.
 * @returns {JSX.Element} Rendered PanelPage component.
 */
const PanelPage = () => {
  const [answers] = useState([
    { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { question: "Explain Tailwind CSS.", answer: "A utility-first CSS framework for rapid UI development." }
  ]);
  const [grades, setGrades] = useState([]);

  /**
   * Updates the grade for a specific answer.
   * @param {number} index - Index of the answer being graded.
   * @param {string} grade - Grade assigned to the answer.
   */
  const gradeAnswer = (index, grade) => {
    setGrades(prevGrades => {
      const newGrades = [...prevGrades];
      newGrades[index] = grade;
      return newGrades;
    });
  };

  return (
    <div className="panel-page">
      <GradeAnswers answers={answers} gradeAnswer={gradeAnswer} />
      <div className="grades-section">
        <h2 className="grades-title">Grades</h2>
        <ul className="grades-list">
          {answers.map((answer, index) => (
            <li key={`grade-${index}`} className="grade-item">
              <p className="question"><strong>Question:</strong> {answer.question}</p>
              <p className="answer"><strong>Answer:</strong> {answer.answer}</p>
              <p className="grade"><strong>Grade:</strong> {grades[index] || 'Not graded'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PanelPage;