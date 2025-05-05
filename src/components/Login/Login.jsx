import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className='flex justify-center'>
      <fieldset className="fieldset bg-[#1F2937] border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />
        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />
        <button className="btn btn-neutral mt-4">Login</button>
        <Link to={'/register'} className='mt-4 link'>No account? Sign up Here!</Link>
      </fieldset>
    </div>
  );
};

export default Login;