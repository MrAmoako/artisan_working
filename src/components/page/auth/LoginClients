import React, { useState } from 'react';
import { auth } from './firebaseconfig/firebase';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../images/back2.jpg';

const ClientLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [resetMessage, setResetMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in with email and password
      await auth.signInWithEmailAndPassword(email, password);
      // Redirect to Artisan page after successful login
      navigate('/Artisan');
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError('Please enter your email to reset password');
      return;
    }
    try {
      await auth.sendPasswordResetEmail(email);
      setResetMessage('Password reset email sent successfully');
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <form onSubmit={handleLogin} className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        {resetMessage && <p className="text-green-500 text-xs italic mb-4">{resetMessage}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700 text-sm focus:outline-none focus:underline"
            onClick={handlePasswordReset}
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientLogin;
