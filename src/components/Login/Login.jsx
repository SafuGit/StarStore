import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const {signIn} = use(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const {email, password} = {
      email: form.email.value,
      password: form.password.value
    }
    signIn(email, password)
      .then(result => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
      }).catch(error => {
        // *TODO - Implement react toast here to
        alert(error.message);
      })
  }
  return (
    <div className='flex justify-center'>
      <form onSubmit={handleLogin}>
        <fieldset className="fieldset bg-[#1F2937] border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>
          <label className="label">Email</label>
          <input name="email" type="text" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <Link to={'/register'} className='mt-4 link'>No account? Sign up Here!</Link>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;