import React, { useContext } from 'react';
import { CarContext } from '../context';
import Loading from './Loading';
import Car from './Car';
import Title from './Title';

const FeaturedCars = () => {
  const { loading, featuredCars: cars } = useContext(CarContext);

  const carList = cars.map((car) => <Car key={car.id} car={car} />);

  return (
    <section className="featured-cars">
      <Title title="Featured Cars" />
      <div className="featured-cars-center">{loading ? <Loading /> : carList}</div>
    </section>
  );
};

export default FeaturedCars;