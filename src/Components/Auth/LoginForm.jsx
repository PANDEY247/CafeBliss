import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const LoginForm = ({ onSwitchMode, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState(null);
  const { signIn, error } = useAuth();

  const validateForm = () => {
    if (!email) {
      setLocalError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLocalError('Please enter a valid email');
      return false;
    }
    if (!password) {
      setLocalError('Password is required');
      return false;
    }
    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);

    if (!validateForm()) return;

    setLoading(true);
    const result = await signIn(email, password);

    if (result.success) {
      setEmail('');
      setPassword('');
      onSuccess();
    } else {
      setLocalError(result.error || 'Login failed. Please try again.');
    }
    setLoading(false);
  };

  const displayError = localError || error;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {displayError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {displayError}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setLocalError(null);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition"
          placeholder="your@email.com"
          disabled={loading}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setLocalError(null);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition"
            placeholder="••••••••"
            disabled={loading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800"
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-700 text-white py-2 rounded-lg font-medium hover:bg-amber-800 disabled:bg-gray-400 transition-all"
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>

      <div className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitchMode}
          className="text-amber-700 hover:text-amber-800 font-medium"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
