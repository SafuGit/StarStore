import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        Swal.fire({
          icon: 'success',
          title: "Succesfully Logged In!",
        })
        navigate("/")
      }).catch(error => {
        Swal.fire({
          icon: 'error',
          title: error.message,
        })
      })
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    // eslint-disable-next-line no-unused-vars
    const {name, photo, email, password} = {
      name: form.name.value,
      photo: form.photo.value,
      email: form.email.value,
      password: form.password.value
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          icon: 'success',
          title: "Succesfully Registered!",
        })
        navigate("/")
      }).catch(error => {
        Swal.fire({
          icon: 'error',
          title: error.message,
        })
      })
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleRegister}>
        <fieldset className="fieldset bg-[#1F2937] border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Register</legend>
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Photo URL</label>
          <input name="photo" type="text" className="input" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input name="email" type="text" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4" type="submit">Register</button>
          <button type='button' onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-2">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
          <Link to={"/login"} className="mt-4 link">
            Already have an account? Log in Here!
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
