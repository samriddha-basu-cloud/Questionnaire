import React, { useState } from 'react';

/**
 * Component for answering questions.
 * 
 * @param {Object} props - Component properties.
 * @param {Array<string>} props.questions - Array of questions.
 * @param {Function} props.submitAnswer - Function to submit the answer.
 * @returns {JSX.Element} Rendered form for answering questions.
 */
const AnswerForm = ({ questions, submitAnswer }) => {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  /**
   * Handles form submission.
   * 
   * @param {React.FormEvent<HTMLFormElement>} event - Form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedQuestion && answer.trim()) {
      submitAnswer(selectedQuestion, answer);
      setAnswer('');
      setSelectedQuestion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="answer-form">
      <select
        value={selectedQuestion}
        onChange={(event) => setSelectedQuestion(event.target.value)}
        className="question-select"
        aria-label="Select a question"
      >
        <option value="">Select a question</option>
        {questions.map((question, index) => (
          <option key={`question-${index}`} value={question}>
            {question}
          </option>
        ))}
      </select>
      <textarea
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        className="answer-textarea"
        placeholder="Write your answer here"
        aria-label="Answer input"
      />
      <button 
        type="submit" 
        className="submit-button"
      >
        Submit Answer
      </button>
    </form>
  );
};

export default AnswerForm;