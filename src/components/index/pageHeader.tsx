import React from 'react';

import Container from '@/layouts/Container';

import LikeIcon from '../Icon/likeIcon';
import ShareIcon from '../Icon/shareIcon';

interface IPageHeader {
  hotelName?: string;
  address?: string;
}

const PageHeader = ({ hotelName, address }: IPageHeader) => {
  return (
    <Container>
      <div className="py-8">
        <div className="flex flex-row items-center justify-between">
          <div>
            <div>
              <h2 className="text-heading font-bold leading-10 tracking-tight text-gray-700">
                {hotelName}
              </h2>
            </div>
            <div>
              <p className="text-lg font-medium leading-7 text-gray-25">
                {address}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700">
              <LikeIcon />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700">
              <ShareIcon />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PageHeader;
