import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title='Rent your car now' subtitle='Cars for every need'>
          <Link to='/cars' className='btn-primary'>
            Our Cars
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedCars />
    </>
  );
};

export default Home;