import React from 'react';
import AppDetailHeading from '../AppDetailHeading/AppDetailHeading';
import { useLoaderData } from 'react-router';
import AppDetailCard from '../AppDetailCard/AppDetailCard';

const AppDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <AppDetailHeading></AppDetailHeading>
      <AppDetailCard data={data}></AppDetailCard>
    </div>
  );
};

export default AppDetails;