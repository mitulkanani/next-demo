import React from 'react';

import Container from '@/layouts/Container';

import AvailableRooms from './availableRooms';
import OfferedAmenities from './offeredAmenities';
import PriceCard from './priceCard';
import Profile from './profile';

const Details = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-8 py-8">
        <div className="col-span-2">
          <Profile />
        </div>
        <div className="col-span-2">
          <AvailableRooms />
        </div>
        <div className="col-span-2 row-span-2">
          <OfferedAmenities />
        </div>
        <div className="col-start-3 row-start-1 row-end-4">
          <PriceCard />
        </div>
      </div>
    </Container>
  );
};

export default Details;
