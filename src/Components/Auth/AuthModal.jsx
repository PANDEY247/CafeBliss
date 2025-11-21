import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState('login');
  const { setError } = useAuth();

  const handleCloseModal = () => {
    setMode('login');
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>

        {mode === 'login' ? (
          <LoginForm onSwitchMode={() => setMode('signup')} onSuccess={handleCloseModal} />
        ) : (
          <SignupForm onSwitchMode={() => setMode('login')} onSuccess={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
