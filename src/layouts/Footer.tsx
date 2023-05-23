import Link from 'next/link';
import React from 'react';

import AppleIcon from '@/components/Icon/appleIcon';
import FaceBookIcon from '@/components/Icon/faceBookIcon';
import GoogleIcon from '@/components/Icon/googleIcon';
import InstagramIcon from '@/components/Icon/instagramIcon';

import Container from './Container';

const Footer = () => {
  return (
    <Container>
      <div className="pt-10 pb-14">
        <div className="grid grid-cols-5">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-700">
                Products
              </h3>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Features
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Integrations
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Enterprise
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Solutions
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-700">
                Products
              </h3>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Features
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Integrations
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Enterprise
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Solutions
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-700">
                Resources
              </h3>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Partners
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Developers
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Community
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Apps
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-700">
                Company
              </h3>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                About Us
              </Link>
              <Link
                href={'/'}
                className="text-base font-medium leading-6 text-gray-50"
              >
                Careers
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-700">
                Mobile app
              </h3>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <Link href={'/'}>
                <img src="/assets/images/appstorelogo.png" alt="" />
              </Link>
              <Link href={'/'}>
                {' '}
                <img src="/assets/images/playstorelogo.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-row items-center justify-between">
          <div>
            <img src="/assets/images/company.png" alt="" />
          </div>
          <div>
            <p className="text-base font-normal leading-6 text-gray-50">
              © {new Date().getFullYear()} Totel. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <Link href={'https://www.facebook.com/'}>
              <FaceBookIcon />
            </Link>
            <Link href={'https://www.google.com/'}>
              <GoogleIcon />
            </Link>
            <Link href={'https://www.apple.com/'}>
              <AppleIcon />
            </Link>
            <Link href={'https://instagram.com/'}>
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
