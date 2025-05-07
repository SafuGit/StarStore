import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { MdEmail, MdPerson, MdVerified } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Profile = () => {
  const { user, updateNamePhoto } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const [name, photo] = [form.name.value, form.photo.value];
    if (name === "" || photo === "") {
      Swal.fire({
        icon: 'error',
        title: "Please fill all the fields!",
      })
      return;
    }
    updateNamePhoto(name, photo)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: "Succesfully Updated Profile!",
      })
      navigate("/profile");
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: error.message,
      })
    })
  }

  return (
    <div className='w-[90vw] mx-auto flex gap-4'>
      <div className='flex flex-col items-center bg-[#1F2937] rounded-lg p-8 w-[20%] h-full'>
        <div>
          <img className='rounded-full' src={user.photoURL} alt="" />
        </div>
        <div className='divider'></div>
        <h1 className='text-3xl'>{user.displayName}</h1>
      </div>
      <div className='bg-[#1F2937] rounded-lg p-8 w-[80%]'>
        <h1 className='text-5xl font-medium mb-10'>Profile</h1>
        <div className='divider'></div>
        <div className='grid grid-cols-2'>
          <div>
            <div className='text-xl text-gray-400 flex gap-2 mb-2'>
              <MdEmail className='text-3xl'></MdEmail>
              {user.email}
            </div>
            <div className='text-xl text-gray-400 flex gap-2 mb-2'>
              <MdPerson className='text-3xl'></MdPerson>
              {user.displayName}
            </div>
            <div className='text-xl text-gray-400 flex gap-2'>
              <MdVerified className='text-3xl'></MdVerified>
              {user.emailVerified ? "Verified" : "Not Verified"}
            </div>
          </div>
          <form onSubmit={handleUpdateProfile} className='flex flex-col'>
            <label className="label">Name</label>
            <input type="text" className='input mb-2' name='name' placeholder={user.displayName} />

            <label className="label">Photo URL</label>
            <input type="text" className='input mb-4' name='photo' placeholder={user.photoURL} />

            <button type='submit' className="btn bg-blue-600 w-50 rounded-md">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;