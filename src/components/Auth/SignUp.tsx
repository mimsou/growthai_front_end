import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';
import { UserPlusIcon, LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import AuthLayout from 'components/Layout/AuthLayout';

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      await dispatch(signUp({ name, email, password }));
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="Create Your Account" subtitle="Join us and start optimizing your online presence">
       <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your Name"
              className="w-full mt-2 pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <UserPlusIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
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
              placeholder="Create a Password"
              className="w-full mt-2 pl-10 pr-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105 mt-6"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Already have an account? <a href="/sign-in" className="text-blue-500">Sign In</a></p>
        </div>
    </AuthLayout>
  );
};

export default SignUp;
