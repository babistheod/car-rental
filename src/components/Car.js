import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImg from '../images/car-fleet.jpg';

const Car = ({ car }) => {
  const { name, slug, images, price } = car;

  return (
    <article className='car'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='car' />
        <div className='price-top'>
          <h6>{price}€</h6>
          <p>per day</p>
        </div>
        <Link to={`/cars/${slug}`} className="btn-primary car-link">
          Details
        </Link>
      </div>
      <p className='car-info'>{name}</p>
    </article>
  );
};

Car.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Car;