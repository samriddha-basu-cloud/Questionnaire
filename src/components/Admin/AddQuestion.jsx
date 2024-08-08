import React, { useState } from 'react';

/**
 * Component for adding a nutrition-related question.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.addQuestion - Function to add a new question.
 * @returns {JSX.Element} Rendered form for adding a question.
 */
const AddNutritionQuestion = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');

  /**
   * Handles form submission.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - Form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (question.trim()) {
      addQuestion(question);
      setQuestion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="nutrition-question-form">
      <input
        type="text"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        className="nutrition-question-input"
        placeholder="Enter your nutrition-related question"
        aria-label="Nutrition question input"
      />
      <button
        type="submit"
        className="nutrition-question-submit"
      >
        Add Nutrition Question
      </button>
    </form>
  );
};

export default AddNutritionQuestion;