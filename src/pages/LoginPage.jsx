import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

/**
 * LoginPage component for user authentication with neumorphic design.
 * @returns {JSX.Element} Rendered LoginPage component.
 */
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /**
   * Handles user login.
   * @param {React.FormEvent<HTMLFormElement>} event - Form submission event.
   */
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="login-page p-10 rounded-2xl shadow-neumorph bg-gray-100">
        <h2 className="login-title text-3xl font-bold mb-6 text-gray-700">Login</h2>
        <form onSubmit={handleLogin} className="login-form space-y-6">
          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="email-input w-full px-4 py-3 rounded-lg bg-gray-100 border-none shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              aria-label="Email input"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="password-input w-full px-4 py-3 rounded-lg bg-gray-100 border-none shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              aria-label="Password input"
            />
          </div>
          <button
            type="submit"
            className="login-button w-full py-3 rounded-lg bg-blue-500 text-white font-semibold shadow-neumorph-button hover:shadow-neumorph-button-hover active:shadow-neumorph-button-active transition duration-150 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;