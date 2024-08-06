import React, { useState } from 'react';

const AnswerQuestion = ({ questions, submitAnswer }) => {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAnswer(selectedQuestion, answer);
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className="m-4">
      <select
        value={selectedQuestion}
        onChange={(e) => setSelectedQuestion(e.target.value)}
        className="border p-2 w-full mb-2"
      >
        <option value="">Select a question</option>
        {questions.map((question, index) => (
          <option key={index} value={question}>{question}</option>
        ))}
      </select>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="border p-2 w-full"
        placeholder="Write your answer"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2">Submit Answer</button>
    </form>
  );
};

export default AnswerQuestion;
