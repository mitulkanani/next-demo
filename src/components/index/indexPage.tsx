import React from 'react';

import Details from './details/details';
import Gallery from './gallery';
import Map from './map';
import NearByHotels from './nearByHotels';
import PageHeader from './pageHeader';
import Review from './review';

const IndexPage = () => {
  return (
    <>
      <PageHeader
        hotelName="Cerulean Tower Tokyu Hotel"
        address="26-1 Sakuragaokacho, Shibuya City, Tokyo 150-8512, Japan"
      />
      <Gallery />
      <Details />
      <Map />
      <Review />
      <NearByHotels />
    </>
  );
};

export default IndexPage;
