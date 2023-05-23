import React from 'react';

import Button from '@/components/button/button';

const AvailableRooms = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-2xl font-semibold leading-8 -tracking-wide  text-black">
            Available rooms
          </h3>
        </div>
        <div>
          <p className="text-base font-medium leading-5 text-black">
            2 of 4 Rooms Available
          </p>
          <div className="relative z-0 mt-2 h-2 w-full bg-primary-50">
            <div className="absolute top-0 left-0 z-50 h-2 w-1/2 bg-secondary-500" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-2xl font-semibold leading-8 -tracking-wide  text-black">
            Description
          </h3>
        </div>
        <div className="mt-6">
          <p className="text-base font-normal leading-6 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="mt-4">
          <Button>Show more</Button>
        </div>
      </div>
    </div>
  );
};

export default AvailableRooms;
