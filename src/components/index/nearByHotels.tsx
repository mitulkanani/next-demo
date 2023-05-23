import React from 'react';

import Container from '@/layouts/Container';

import Button from '../button/button';
import HotelCard from '../card/hotelCard';

const hotelsData = [
  {
    hotelName: 'Hotel Assenzio',
    imageUrl: '/assets/images/hotel1.png',
    rating: '4.2',
    date: '25 Apr 2022 - 28 Apr 2022',
    description:
      'But happy to move in with more than that, I’m super easy going and tidy.',
    price: '$32 / Day',
  },
  {
    hotelName: 'Hotel Assenzio',
    imageUrl: '/assets/images/hotel2.png',
    rating: '4.2',
    date: '25 Apr 2022 - 28 Apr 2022',
    description:
      'But happy to move in with more than that, I’m super easy going and tidy.',
    price: '$32 / Day',
  },
  {
    hotelName: 'Hotel Assenzio',
    imageUrl: '/assets/images/hotel3.png',
    rating: '4.2',
    date: '25 Apr 2022 - 28 Apr 2022',
    description:
      'But happy to move in with more than that, I’m super easy going and tidy.',
    price: '$32 / Day',
  },
];

const NearByHotels = () => {
  return (
    <div className="bg-neutral-200">
      <Container>
        <div className="flex flex-col gap-14 bg-neutral-200 py-14">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h2 className="mb-4 text-heading font-bold leading-10 text-gray-700">
                Nearby hotels
              </h2>
              <p className="text-base  font-normal leading-6 text-gray-50">
                You can find places and stay with hotels and home-stays ranked
                by travellers. What fun could we have <br /> more than having
                roommate with similar interest.
              </p>
            </div>
            <div>
              <Button>Show more</Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {hotelsData?.length > 0 &&
              hotelsData.map((hotel, index) => (
                <div key={index}>
                  <HotelCard {...hotel} />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NearByHotels;
