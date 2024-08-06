import React from 'react';

const UserAnswers = ({ answers }) => {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold mb-2">Your Answers</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index} className="border p-2 mb-2">
            <p><strong>Question:</strong> {answer.question}</p>
            <p><strong>Answer:</strong> {answer.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAnswers;
