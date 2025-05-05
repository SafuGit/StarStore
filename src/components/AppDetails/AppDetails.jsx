import React from 'react';
import AppDetailHeading from '../AppDetailHeading/AppDetailHeading';
import { useLoaderData } from 'react-router';

const AppDetails = () => {
  const data = useLoaderData;
  console.log(data);
  return (
    <div>
      <AppDetailHeading></AppDetailHeading>
    </div>
  );
};

export default AppDetails;