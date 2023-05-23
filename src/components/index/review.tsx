import React from 'react';

import Container from '@/layouts/Container';

import Button from '../button/button';
import ReviewCard from '../card/reviewCard';
import DotIcon from '../Icon/dotIcon';
import StarIcon from '../Icon/starIcon';

const Review = () => {
  return (
    <Container>
      <div className="flex flex-col gap-6 py-8">
        <div className="flex flex-row items-center gap-1.5">
          <StarIcon />
          <h3 className="text-2xl font-semibold leading-8 -tracking-wide  text-black">
            5.0
          </h3>
          <DotIcon />
          <h3 className="text-2xl font-medium leading-8 -tracking-wide  text-black">
            12 Reviews
          </h3>
        </div>

        <div className="grid grid-cols-3">
          <ReviewCard name="Dave Jones" profile="/assets/images/profile1.png" />
          <ReviewCard name="Morgan John" profile="/assets/images/profile.png" />
          <ReviewCard
            name="Olivia Manson"
            profile="/assets/images/profile2.png"
          />
        </div>

        <div>
          <Button>Show more amenities</Button>
        </div>
      </div>
    </Container>
  );
};

export default Review;
