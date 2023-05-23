import React from 'react';

import Container from '@/layouts/Container';

import Button from '../button/button';

const Gallery = () => {
  return (
    <Container>
      <div className="relative">
        <div className=" grid grid-cols-4 grid-rows-2 gap-4">
          <div className="col-span-2 row-span-2">
            <img
              src="/assets/images/img1.png"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div>
            <img
              src="/assets/images/img2.png"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div>
            <img
              src="/assets/images/img3.png"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="col-span-2">
            <img
              src="/assets/images/img4.png"
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <Button>Show more photos</Button>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
