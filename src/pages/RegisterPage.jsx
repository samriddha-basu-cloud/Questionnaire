import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

/**
 * RegisterPage component for user registration.
 * @returns {JSX.Element} Rendered RegisterPage component.
 */
const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /**
   * Handles user registration.
   * @param {React.FormEvent<HTMLFormElement>} event - Form submission event.
   */
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="register-page">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="email-input"
          placeholder="Email"
          aria-label="Email input"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="password-input"
          placeholder="Password"
          aria-label="Password input"
        />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;