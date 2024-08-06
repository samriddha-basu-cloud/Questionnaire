import React from 'react';

const QuestionList = ({ questions }) => {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold mb-2">Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index} className="border p-2 mb-2">{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
