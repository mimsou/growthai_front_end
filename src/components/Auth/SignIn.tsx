import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { signIn, handleGoogleSignIn } from '../../store/actions/authActions';
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import AuthLayout from 'components/Layout/AuthLayout';
import InputField from 'components/Ui/InputField';
import Button from 'components/Ui/Button';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(signIn({ email, password }));
      navigate('/dashboard');
    } catch (err: any) {
      // Handle error (you might want to set an error state and display it)
    }
  };

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    dispatch(handleGoogleSignIn(credentialResponse, navigate));
  };

  return (
    <AuthLayout title="Sign In to Your Account" subtitle="Welcome back! Please sign in to continue">
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Your Email"
          icon={<EnvelopeIcon className="h-5 w-5 text-gray-500" />}
        />
        <InputField
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Your Password"
          icon={<LockClosedIcon className="h-5 w-5 text-gray-500" />}
        />
        <Button type="submit" fullWidth>Sign In</Button>
      </form>

      <div className="mt-6 flex justify-center">
           <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  useOneTap
                  size='large'
                  type='icon'
                  className="w-full max-w-xs"
                />
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">Don't have an account? <a href="/sign-up" className="text-primary">Sign Up</a></p>
      </div>
    </AuthLayout>
  );
};

export default SignIn;