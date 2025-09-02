import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { validateForm } from '../utils/validation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // 🔹 loading state

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const newErrors = validateForm({ email, password }, 'signin');
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true); // 🔹 start loading
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log('✅ Signed in:', user);

        navigate('/');
      } catch (error) {
        console.error('❌ Signin error:', error.message);
        setErrors({ firebase: error.message });
      } finally {
        setLoading(false); // 🔹 stop loading no matter what
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg')]">
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/60'></div>

      {/* Logo */}
      <img
        src={Logo}
        alt='Smartflix'
        className='absolute top-5 left-10 w-[200px] h-[70px]'
      />

      {/* Form Section */}
      <div className='relative flex justify-center items-center h-full'>
        <div className='bg-black/75 p-12 rounded-md w-[350px] sm:w-[400px]'>
          <h2 className='text-white text-3xl font-bold mb-6'>Sign In</h2>

          <form onSubmit={submitForm} className='flex flex-col gap-4'>
            {/* Email */}
            <div>
              <input
                type='text'
                placeholder='Email or phone number'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 w-full rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-red-600'
                disabled={loading}
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 w-full rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-red-600'
                disabled={loading}
              />
              {errors.password && (
                <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={loading} // 🔹 disable button when loading
              className={`${
                loading
                  ? 'bg-red-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
              } text-white font-semibold py-3 rounded mt-4`}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            {errors.firebase && (
              <p className='text-red-500 text-sm mt-2'>{errors.firebase}</p>
            )}

            {/* Options */}
            <div className='flex justify-between items-center text-sm text-gray-400 mt-2'>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-red-600' />
                Remember me
              </label>
              <a href='#' className='hover:underline'>
                Need help?
              </a>
            </div>
          </form>

          {/* Sign Up Redirect */}
          <p className='text-gray-400 mt-6'>
            New to Smartflix?{' '}
            <a href='/sign-up' className='text-white hover:underline'>
              Sign up now
            </a>
            .
          </p>

          {/* reCAPTCHA Disclaimer */}
          <p className='text-gray-500 text-xs mt-4'>
            This page is protected by Google reCAPTCHA to ensure you’re not a
            bot.{' '}
            <a href='#' className='text-blue-600 hover:underline'>
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
