import React, { useState } from 'react';

const AddQuestion = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion(question);
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit} className="m-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border p-2 w-full"
        placeholder="Enter your question"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2">Add Question</button>
    </form>
  );
};

export default AddQuestion;
