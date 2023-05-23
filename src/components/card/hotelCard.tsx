import React from 'react';

import Star2Icon from '../Icon/star2Icon';

interface IHotelCard {
  hotelName: string;
  imageUrl: string;
  rating?: string;
  date?: string;
  description?: string;
  price?: string;
}

const HotelCard = ({
  hotelName,
  imageUrl,
  rating,
  date,
  description,
  price,
}: IHotelCard) => {
  return (
    <div className="rounded-xl border border-neutral-700">
      {imageUrl && (
        <div>
          <img src={`${imageUrl}`} alt={imageUrl} className="rounded-t-xl" />
        </div>
      )}
      <div className="p-4">
        <div className="flex flex-row items-center justify-between">
          <h4 className="text-xl font-semibold leading-7 text-black">
            {hotelName}
          </h4>

          {rating && (
            <p className="flex flex-row items-center gap-1 text-base font-semibold leading-6 text-black">
              <span>
                <Star2Icon />
              </span>
              {rating}
            </p>
          )}
        </div>

        {date && (
          <div className="mt-1">
            <p className="text-sm font-medium leading-5 text-black">{date}</p>
          </div>
        )}

        {description && (
          <div className="mt-2">
            <p className="text-sm font-normal leading-5 text-neutral-950">
              {description}
            </p>
          </div>
        )}

        {price && (
          <div className="mt-2">
            <p className="text-base font-semibold leading-6 text-black">
              {price}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelCard;
