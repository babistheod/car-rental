import React, { useContext } from 'react';
import { CarContext } from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const CarsFilter = ({ cars }) => {
  const context = useContext(CarContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    automatic,
    electric,
  } = context;

  let types = getUnique(cars, 'type');
  types = ['all', ...types].map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  let passengers = getUnique(cars, 'capacity');
  passengers = ['all', ...passengers].map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  return (
    <section className='filter-container'>
      <Title title='search cars' />
      <form className='filter-form'>
        {/* select types */}
        <div className='form-group'>
          <label htmlFor='type'>Car type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select types */}

        {/* select passengers */}
        <div className='form-group'>
          <label htmlFor='capacity'>Passengers</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {passengers}
          </select>
        </div>
        {/* end of select passengers */}

        {/* select price */}
        <div className='form-group'>
          <label htmlFor='price'>Car price ${price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* end of select price */}

        {/* select size */}
        <div className='form-group'>
          <label htmlFor='size'>Car motor size</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              onChange={handleChange}
              className='size-input'
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>
        {/* end of select size */}

        {/* checkboxes */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='automatic'
              id='automatic'
              checked={automatic}
              onChange={handleChange}
            />
            <label htmlFor='automatic'>automatic</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='electric'
              id='electric'
              checked={electric}
              onChange={handleChange}
            />
            <label htmlFor='electric'>electric</label>
          </div>
        </div>
        {/* end of checkboxes */}
      </form>
    </section>
  );
};

export default CarsFilter;
