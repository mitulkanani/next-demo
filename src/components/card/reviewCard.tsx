import React from 'react';

import StarIcon from '../Icon/starIcon';

interface IReviewCard {
  name?: string;
  profile?: string;
}

const ReviewCard = ({ name, profile }: IReviewCard) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row gap-1">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon color="#DAE0E6" />
      </div>
      <div>
        <p className="text-base font-normal leading-6 text-gray-700">
          “Absolutely incredible. This place was definitely a dream! From the
          entryway, to each floor... stunning”
        </p>
      </div>
      <div className="flex flex-row items-center gap-2.5">
        {profile && (
          <div>
            <img src={`${profile}`} alt="" className="h-10 w-10" />
          </div>
        )}

        <div>
          {name && (
            <p className="text-base font-medium leading-6 text-gray-700">
              {name}
            </p>
          )}
          <p className="text-base font-medium leading-6 text-gray-50">
            Student
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
