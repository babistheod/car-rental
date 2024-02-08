import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import CarsContainer from '../components/CarsContainer';

const Cars = () => {
  return (
    <>
      <Hero hero="carsHero">
        <Banner title='Our cars'>
          <Link to='/' className='btn-primary'>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <CarsContainer />
    </>
  );
};

export default Cars;
