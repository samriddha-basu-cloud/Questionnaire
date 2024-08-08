import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
/**
 * UserPage component for answering questions.
 * @returns {JSX.Element} Rendered UserPage component.
 */
const UserPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      setQuestions(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchQuestions();
  }, []);
  /**
   * Handles submission of an answer.
   * @param {React.FormEvent<HTMLFormElement>} event - Form submission event.
   */
  const handleSubmitAnswer = async (event) => {
    event.preventDefault();
    if (!selectedQuestion || !answer.trim()) return;

    try {
      await addDoc(collection(db, "answers"), {
        questionId: selectedQuestion,
        userId: auth.currentUser.uid,
        answerText: answer.trim()
      });
      setAnswer('');
      setSelectedQuestion('');
    } catch (error) {
      console.error("Error submitting answer: ", error);
    }
  };

  return (
    <div className="user-page">
      <h2 className="page-title">User Page</h2>
      <form onSubmit={handleSubmitAnswer} className="answer-form">
        <select
          value={selectedQuestion}
          onChange={(event) => setSelectedQuestion(event.target.value)}
          className="question-select"
          aria-label="Select a question"
        >
          <option value="">Select a question</option>
          {questions.map((question) => (
            <option key={question.id} value={question.id}>
              {question.questionText}
            </option>
          ))}
        </select>
        <textarea
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          className="answer-textarea"
          placeholder="Write your answer"
          aria-label="Answer input"
        />
        <button type="submit" className="submit-button">Submit Answer</button>
      </form>
    </div>
  );
};

export default UserPage;