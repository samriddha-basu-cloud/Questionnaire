// src/pages/AdminPage.jsx
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        if (user.email !== 'admin@mohanta.com') {
          navigate('/');
        }
      } else {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [navigate]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      setQuestions(querySnapshot.docs.map(doc => doc.data()));
    };
    
    fetchQuestions();
  }, []);

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "questions"), {
        questionText: question,
        adminId: auth.currentUser.uid
      });
      setQuestion('');
    } catch (error) {
      console.error("Error adding question: ", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Admin Page</h2>
      <form onSubmit={handleAddQuestion} className="flex flex-col mb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Enter your question"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Question</button>
      </form>
      <div>
        <h3 className="text-lg mb-2">Questions:</h3>
        <ul>
          {questions.map((q, index) => (
            <li key={index} className="border p-2 mb-2">{q.questionText}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
