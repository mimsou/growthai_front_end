import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { signIn } from '../../store/actions/authActions';
import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../../store/actions/actionTypes';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import BASE_API_URL from '../../config';
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await dispatch(signIn({ email, password }));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;

      // Send Google token to backend to verify and get JWT
      const backendResponse = await axios.post(`${BASE_API_URL}/auth/google`, {
        token: credential,
      });

      const { access_token } = backendResponse.data;

      // Store JWT token
      localStorage.setItem('token', access_token);

      // Decode the token to get user information
      const decodedUser = jwtDecode(access_token);

      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: decodedUser,
      });

      navigate('/dashboard');
    } catch (error) {
      dispatch({
        type: SIGN_IN_FAILURE,
        payload: error.message || 'Google Sign-In failed',
      });
    }
  };

  const handleGoogleFailure = (error) => {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: error.message || 'Google Sign-In failed',
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-900">Sign In to Your Account</h2>
      <p className="text-center text-gray-600 mb-6">Welcome back! Please sign in to continue</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
            className="w-full mt-2 pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>
        <div className="relative">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Your Password"
            className="w-full mt-2 pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105 mt-6"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          useOneTap
        />
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">Don't have an account? <a href="/sign-up" className="text-blue-500">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
