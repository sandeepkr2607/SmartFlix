import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
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
          <h2 className='text-white text-3xl font-bold mb-6'>Sign Up</h2>

          <form onSubmit={submitForm} className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='p-3 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-red-600'
              required
            />

            <input
              type='email'
              placeholder='Email or phone number'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-3 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-red-600'
              required
            />

            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='p-3 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-red-600'
              required
            />

            <button
              type='submit'
              className='bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded mt-4'
            >
              Sign Up
            </button>
          </form>

          <p className='text-gray-400 mt-6'>
            Already have an account?{' '}
            <a href='/sign-in' className='text-white hover:underline'>
              Sign in now
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

export default SignUp;
