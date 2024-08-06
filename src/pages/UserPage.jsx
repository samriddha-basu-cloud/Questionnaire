import React, { useState } from 'react';
import AnswerQuestion from '../components/User/AnswerQuestion';
import UserAnswers from '../components/User/UserAnswers';

const UserPage = () => {
  const [questions] = useState(["What is React?", "Explain Tailwind CSS."]);  // Example questions
  const [answers, setAnswers] = useState([]);

  const submitAnswer = (question, answer) => {
    setAnswers([...answers, { question, answer }]);
  };

  return (
    <div className="p-4">
      <AnswerQuestion questions={questions} submitAnswer={submitAnswer} />
      <UserAnswers answers={answers} />
    </div>
  );
};

export default UserPage;
