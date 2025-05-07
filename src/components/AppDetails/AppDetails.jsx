import React, { useState } from 'react';
import AppDetailHeading from '../AppDetailHeading/AppDetailHeading';
import { useLoaderData } from 'react-router';
import AppDetailCard from '../AppDetailCard/AppDetailCard';
import Swal from 'sweetalert2';
import AppDetailReview from '../AppDetailReview/AppDetailReview';
import Reviews from '../AppDetailReview/Reviews';
import SectionTitle from '../../utils/SectionTitle';

const AppDetails = () => {
  const data = useLoaderData();

  const [installed, setInstalled] = useState(false);
  const [installedOnce, setInstalledOnce] = useState(false);
  const [reviews, setReviews] = useState(data.reviews);

  const handleSetReview = (review) => {
    setReviews([...reviews, review]);
  }

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
    setInstalledOnce(true);
  }

  return (
    <div>
      <AppDetailHeading></AppDetailHeading>
      <AppDetailCard data={data} installed={installed} handleSetInstalled={handleSetInstalled}></AppDetailCard>
      <AppDetailReview reviews={reviews} handleSetReview={handleSetReview} installedOnce={installedOnce}></AppDetailReview>
      <SectionTitle title={"Reviews"} className={'!w-[95vw] !text-center mt-20'}></SectionTitle>
      <Reviews data={reviews}></Reviews>
    </div>
  );
};

export default AppDetails;