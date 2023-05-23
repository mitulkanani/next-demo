import React from 'react';

import Container from '@/layouts/Container';

import Button from '../button/button';

const Map = () => {
  return (
    <Container>
      <div>
        <div>
          <h3 className="text-2xl font-semibold leading-8 -tracking-wide text-black">
            Where you’ll be
          </h3>
        </div>
        <div className="mt-6 h-full w-full">
          <img
            src="/assets/images/map.png"
            alt="map"
            className="h-full w-full"
          />
        </div>
        <div className="mt-6">
          <p className="text-base font-normal leading-6 text-black">
            Very dynamic and appreciated district by the people of Bordeaux
            thanks to rue St James and place Fernand Lafargue. Home to many
            historical monuments such as the Grosse Cloche, the Porte de
            Bourgogne and the Porte Cailhau, and cultural sites such as the
            Aquitaine Museum.
          </p>
        </div>
        <div className="mt-4">
          <Button>Show more</Button>
        </div>
      </div>
    </Container>
  );
};

export default Map;
