import React from 'react';

import Button from '@/components/button/button';
import CalenderIcon from '@/components/Icon/calenderIcon';
import DropDownIcon from '@/components/Icon/dropDownIcon';
import FlagIcon from '@/components/Icon/flagIcon';
import KeyBoardIcon from '@/components/Icon/keyBoardIcon';

const PriceCard = () => {
  return (
    <div className="h-full">
      <div className="h-full w-full rounded-3xl border border-neutral-700 bg-white p-6 shadow-priceCard">
        <div>
          <h3 className="text-xl font-semibold leading-8 text-black">
            $75 <span className="text-base font-normal leading-6">/ night</span>
          </h3>
        </div>

        <button className="mt-4 flex max-w-[150px] flex-row items-center rounded-full border border-neutral-700 bg-neutral-100 p-[1px] ">
          <p className="w-full py-2 px-4 text-base font-semibold leading-6 text-black">
            Hour
          </p>
          <p className="w-full rounded-full bg-secondary-600 py-2 px-4 text-center text-base font-semibold leading-6 text-white">
            Day
          </p>
        </button>

        <div className="mt-4 flex flex-row gap-4">
          <div>
            <p className="text-sm font-medium leading-5 text-gray-700">
              Check-In
            </p>
            <div className="mt-2 flex cursor-pointer flex-row items-center justify-between gap-4 rounded-full border border-neutral-700 py-3 px-4">
              <p className="text-base font-medium leading-6 text-gray-700">
                04/12/2023
              </p>
              <CalenderIcon />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium leading-5 text-gray-700">
              Check-In
            </p>
            <div className="mt-2 flex cursor-pointer flex-row items-center justify-between gap-4 rounded-full border border-neutral-700 py-3 px-4">
              <p className="text-base font-medium leading-6 text-gray-700">
                04/12/2023
              </p>
              <CalenderIcon />
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-row items-center justify-between">
          <KeyBoardIcon />
          <p className="cursor-pointer text-base font-medium leading-6 text-gray-700 underline">
            Clear dates
          </p>
        </div>

        <div className="mt-4 max-w-xs">
          <p className="text-sm font-medium leading-5 text-gray-700">Guests</p>
          <div className="mt-2 flex cursor-pointer flex-row items-center justify-between gap-4 rounded-full border border-neutral-700 py-3 px-4">
            <p className="text-base font-medium leading-6 text-gray-700">
              3 guests, 1 infant, 1 pet
            </p>
            <DropDownIcon />
          </div>
        </div>

        <div className="mt-4">
          <Button className="w-full">Submit Review</Button>
        </div>
        <div className="mt-4">
          <Button className="w-full">Claim Cleaning Fees</Button>
        </div>

        <div className="mt-4">
          <p className="text-center text-sm font-normal leading-5 text-gray-500">
            You won’t be charged yet
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-normal leading-6 text-black">
              $75 x 7 nights
            </p>
            <p className="text-base font-normal leading-6 text-black">$525</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-normal leading-6 text-black">
              Cleaning fees
            </p>
            <p className="text-base font-normal leading-6 text-black">$20</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-normal leading-6 text-black">
              Weekly discount
            </p>
            <p className="text-base font-normal leading-6 text-emerald-500">
              -$28
            </p>
          </div>
          <div className="border border-gray-200" />

          <div className="flex items-center justify-between">
            <p className="text-base font-normal leading-6 text-black">Total</p>
            <p className="text-base font-normal leading-6 text-black">$513</p>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-6 flex items-center justify-center gap-3">
          <FlagIcon />
          <span className="cursor-pointer text-sm font-normal leading-5 text-gray-500 underline">
            Report this listing
          </span>
        </p>
      </div>
    </div>
  );
};

export default PriceCard;
