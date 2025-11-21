import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const SignupForm = ({ onSwitchMode, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { signUp, error } = useAuth();

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
    if (password.length < 8) {
      setLocalError('Password must be at least 8 characters');
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setLocalError('Password must contain at least one uppercase letter');
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setLocalError('Password must contain at least one number');
      return false;
    }
    if (password !== confirmPassword) {
      setLocalError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMessage(null);

    if (!validateForm()) return;

    setLoading(true);
    const result = await signUp(email, password);

    if (result.success) {
      setSuccessMessage('Account created! You can now sign in with your credentials.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        onSwitchMode();
        setSuccessMessage(null);
      }, 2000);
    } else {
      setLocalError(result.error || 'Signup failed. Please try again.');
    }
    setLoading(false);
  };

  const displayError = localError || error;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          {successMessage}
        </div>
      )}

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
        <p className="text-xs text-gray-600 mt-1">
          At least 8 characters, 1 uppercase letter, and 1 number
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setLocalError(null);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition"
          placeholder="••••••••"
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-700 text-white py-2 rounded-lg font-medium hover:bg-amber-800 disabled:bg-gray-400 transition-all"
      >
        {loading ? 'Creating account...' : 'Sign Up'}
      </button>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchMode}
          className="text-amber-700 hover:text-amber-800 font-medium"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
