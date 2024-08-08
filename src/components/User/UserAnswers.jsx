import React from 'react';

/**
 * Component to display user answers.
 * 
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.answers - Array of answer objects.
 * @returns {JSX.Element} Rendered list of user answers.
 */
const UserAnswers = ({ answers }) => {
  return (
    <section className="user-answers-section">
      <h2 className="user-answers-heading">Your Answers</h2>
      <ul className="answers-list">
        {answers.map((answer, index) => (
          <li key={`answer-${index}`} className="answer-item">
            <p className="question-text">
              <strong>Question:</strong> {answer.question}
            </p>
            <p className="answer-text">
              <strong>Answer:</strong> {answer.answer}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserAnswers;