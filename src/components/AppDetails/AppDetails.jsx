import React, { useState } from 'react';
import AppDetailHeading from '../AppDetailHeading/AppDetailHeading';
import { useLoaderData } from 'react-router';
import AppDetailCard from '../AppDetailCard/AppDetailCard';
import Swal from 'sweetalert2';

const AppDetails = () => {
  const data = useLoaderData();

  const [installed, setInstalled] = useState(false);
  const handleSetInstalled = () => {
    setInstalled(!installed);
    if (installed == false) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'App Installed!',
        showConfirmButton: false,
        timer: 1500,
        toast: true
      })
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'App Uninstalled!',
        showConfirmButton: false,
        timer: 1500,
        toast: true
      })
    }
  }

  return (
    <div>
      <AppDetailHeading></AppDetailHeading>
      <AppDetailCard data={data} installed={installed} handleSetInstalled={handleSetInstalled}></AppDetailCard>
    </div>
  );
};

export default AppDetails;