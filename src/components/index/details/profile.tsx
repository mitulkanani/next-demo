import React from 'react';

import Button from '@/components/button/button';
import CheckIcon from '@/components/Icon/checkIcon';
import ShieldIcon from '@/components/Icon/shieldIcon';

const Profile = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <div>
            <img
              src="/assets/images/profile.png"
              alt="profile image"
              className="rounded-full"
            />
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-sm font-normal leading-5 text-black">
              <span>
                <CheckIcon />
              </span>
              Identity verified
            </p>
            <h3 className="text-2xl font-medium leading-8 text-black">
              Hosted by Ghazal
            </h3>
          </div>
        </div>
        <div>
          <Button>View Profile</Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <ShieldIcon />
        </div>
        <div>
          <p className="text-sm font-normal leading-5 text-black">
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
