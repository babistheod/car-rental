import React from 'react';
import CarsFilter from './CarsFilter';
import CarsList from './CarsList';
import { withCarConsumer } from '../context';
import Loading from './Loading';

const CarContainer = ({ context }) => {
  const { loading, sortedCars, cars } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <CarsFilter cars={cars} />
      <CarsList cars={sortedCars} />
    </>
  );
};

export default withCarConsumer(CarContainer);