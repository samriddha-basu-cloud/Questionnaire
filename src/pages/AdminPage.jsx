import React, { useState } from 'react';
import AddQuestion from '../components/Admin/AddQuestion';
import QuestionList from '../components/Admin/QuestionList';

const AdminPage = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <div className="p-4">
      <AddQuestion addQuestion={addQuestion} />
      <QuestionList questions={questions} />
    </div>
  );
};

export default AdminPage;
