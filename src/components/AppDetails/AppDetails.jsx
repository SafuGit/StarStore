import React, { useState } from 'react';
import AppDetailHeading from '../AppDetailHeading/AppDetailHeading';
import { useLoaderData } from 'react-router';
import AppDetailCard from '../AppDetailCard/AppDetailCard';

const AppDetails = () => {
  const data = useLoaderData();

  const [installed, setInstalled] = useState(false);
  const handleSetInstalled = () => {
    setInstalled(!installed);
  }

  return (
    <div>
      <AppDetailHeading></AppDetailHeading>
      <AppDetailCard data={data} installed={installed} handleSetInstalled={handleSetInstalled}></AppDetailCard>
    </div>
  );
};

export default AppDetails;