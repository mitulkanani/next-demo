import React from 'react';

import Button from '@/components/button/button';
import AirConditioningIcon from '@/components/Icon/airConditioningIcon';
import BicycleIcon from '@/components/Icon/bicycleIcon';
import CameraIcon from '@/components/Icon/cameraIcon';
import DryerIcon from '@/components/Icon/dryerIcon';
import FreeWasherIcon from '@/components/Icon/freeWasherIcon';
import FreeWifiIcon from '@/components/Icon/freeWifiIcon';
import GardenViewIcon from '@/components/Icon/gardenViewIcon';
import KitchenIcon from '@/components/Icon/kitchenIcon';
import PetsAllowed from '@/components/Icon/petsAllowed';
import RefrigeratorIcon from '@/components/Icon/refrigeratorIcon';

const offeredList = [
  { name: 'Garden View', icon: <GardenViewIcon /> },
  { name: 'Kitchen', icon: <KitchenIcon /> },
  { name: 'Free Wifi', icon: <FreeWifiIcon /> },
  { name: 'Pets Allowed', icon: <PetsAllowed /> },
  { name: 'Free Washer', icon: <FreeWasherIcon /> },
  { name: 'Dryer', icon: <DryerIcon /> },
  { name: 'Air Conditioning', icon: <AirConditioningIcon /> },
  { name: 'Security cameras on property', icon: <CameraIcon /> },
  { name: 'Refrigerator', icon: <RefrigeratorIcon /> },
  { name: 'Bicycle', icon: <BicycleIcon /> },
];

const OfferedAmenities = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold leading-8 -tracking-wide  text-black">
          Offered Amenities
        </h3>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {offeredList?.length > 0 &&
          offeredList.map(({ icon, name }, index) => (
            <div key={index} className="flex items-center gap-4">
              {icon}
              <p className="text-base font-normal leading-6 text-black">
                {name}
              </p>
            </div>
          ))}
      </div>

      <div className="mt-4">
        <Button>Show more amenities</Button>
      </div>
    </div>
  );
};

export default OfferedAmenities;
