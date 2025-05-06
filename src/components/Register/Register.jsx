import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const {name, photo, email, password} = {
      name: form.name.value,
      photo: form.photo.value,
      email: form.email.value,
      password: form.password.value
    }
    console.log(name, photo, email, password);

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
          <Link to={"/login"} className="mt-4 link">
            Already have an account? Log in Here!
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
