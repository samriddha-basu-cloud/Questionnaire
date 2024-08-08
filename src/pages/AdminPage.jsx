import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

/**
 * AdminPage component for managing questions.
 * @returns {JSX.Element} Rendered AdminPage component.
 */
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

  /**
   * Handles adding a new question to the database.
   * @param {React.FormEvent<HTMLFormElement>} event - Form submission event.
   */
  const handleAddQuestion = async (event) => {
    event.preventDefault();
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
    <div className="admin-page">
      <h2 className="admin-page-title">Admin Page</h2>
      <form onSubmit={handleAddQuestion} className="question-form">
        <input
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          className="question-input"
          placeholder="Enter your question"
          aria-label="Question input"
        />
        <button type="submit" className="submit-button">Add Question</button>
      </form>
      <div className="questions-list">
        <h3 className="questions-list-title">Questions:</h3>
        <ul>
          {questions.map((q, index) => (
            <li key={`question-${index}`} className="question-item">{q.questionText}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;