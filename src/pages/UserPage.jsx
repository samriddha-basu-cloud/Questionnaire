// src/pages/UserPage.jsx
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const UserPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      setQuestions(querySnapshot.docs.map(doc => doc.data()));
    };
    
    fetchQuestions();
  }, []);

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "answers"), {
        questionId: selectedQuestion,
        userId: auth.currentUser.uid,
        answerText: answer
      });
      setAnswer('');
    } catch (error) {
      console.error("Error submitting answer: ", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">User Page</h2>
      <form onSubmit={handleSubmitAnswer} className="flex flex-col mb-4">
        <select
          value={selectedQuestion}
          onChange={(e) => setSelectedQuestion(e.target.value)}
          className="border p-2 mb-2"
        >
          <option value="">Select a question</option>
          {questions.map((q, index) => (
            <option key={index} value={q.id}>{q.questionText}</option>
          ))}
        </select>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Write your answer"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Submit Answer</button>
      </form>
    </div>
  );
};

export default UserPage;
