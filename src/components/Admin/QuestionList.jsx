import React from 'react';

/**
 * Component to display a list of nutrition-related questions.
 *
 * @param {Object} props - Component properties.
 * @param {Array<string>} props.questions - Array of nutrition questions.
 * @returns {JSX.Element} Rendered list of nutrition questions.
 */
const NutritionQuestionList = ({ questions }) => {
  return (
    <section className="nutrition-question-section">
      <h2 className="nutrition-question-heading">Nutrition Questions</h2>
      <ul className="nutrition-question-list">
        {questions.map((question, index) => (
          <li
            key={`nutrition-question-${index}`}
            className="nutrition-question-item"
          >
            {question}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NutritionQuestionList;