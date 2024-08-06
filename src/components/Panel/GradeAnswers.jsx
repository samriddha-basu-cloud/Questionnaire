import React from 'react';

const GradeAnswers = ({ answers, gradeAnswer }) => {
  return (
    <div className="m-4">
      <h2 className="text-xl font-bold mb-2">Grade Answers</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index} className="border p-2 mb-2">
            <p><strong>Question:</strong> {answer.question}</p>
            <p><strong>Answer:</strong> {answer.answer}</p>
            <select onChange={(e) => gradeAnswer(index, e.target.value)} className="border p-2 w-full">
              <option value="">Select Grade</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradeAnswers;
