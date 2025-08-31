import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, password);
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
            <input
              type='email'
              placeholder='Email or phone number'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-3 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-red-600'
            />

            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='p-3 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-red-600'
            />

            <button
              type='submit'
              className='bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded mt-4'
            >
              Sign In
            </button>

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

          <p className='text-gray-400 mt-6'>
            New to Smartflix?{' '}
            <a href='/sign-up' className='text-white hover:underline'>
              Sign up now
            </a>
            .
          </p>

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
