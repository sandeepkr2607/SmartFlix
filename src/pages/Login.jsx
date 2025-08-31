import React from 'react';
import Logo from '../assets/Logo.svg';

const Login = () => {
  return (
    <div className='bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg)] w-full h-screen relative'>
      <img src={Logo} alt='' className='w-[200px] h-[70px] absolute m-5' />
    </div>
  );
};

export default Login;
