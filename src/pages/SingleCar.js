import React, { useEffect, useContext } from 'react';
import defaultBcg from '../images/car-fleet.jpg';
import Banner from '../components/Banner';
import { Link, useParams } from 'react-router-dom';
import { CarContext } from '../context';
import StyledHero from '../components/StyledHero';

const SingleCar = () => {
  const { slug } = useParams();
  const { getCar } = useContext(CarContext);
  const car = getCar(slug);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!car) {
    return (
      <div className='error'>
        <h3>No such car could be found...</h3>
        <Link to='/cars' className='btn-primary'>
          back to cars
        </Link>
      </div>
    );
  }

  const { name, description, capacity, size, price, extras, automatic, electric, images } = car;

  return (
    <>
      <StyledHero img={images[0] || defaultBcg}>
        <Banner title={name}>
          <Link to="/cars" className="btn-primary">
            back to cars
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-car">
        <div className='single-car-images'>
          {images.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className='single-car-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price: {price}€ /day</h6>
            <h6>size: {size} CC</h6>
            <h6>passengers: {capacity} people</h6>
            <h6>{automatic ? 'Automatic' : 'Manual'}</h6>
            <h6>{electric ? 'electric' : 'Gas'}</h6>
          </article>
        </div>
      </section>
      <section className="car-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>-{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleCar;
