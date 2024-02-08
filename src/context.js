import React, { useState, useEffect, createContext } from 'react';
import items from './data';

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [state, setState] = useState({
    cars: [],
    sortedCars: [],
    featuredCars: [],
    loading: true,
    type: 'all',
    capacity: 'all',
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    automatic: false,
    electric: false,
  });

  useEffect(() => {
    getData();
  }, []); // Empty dependency array ensures that this effect runs once on mount

  const getData = () => {
    let cars = formatData(items);
    let featuredCars = cars.filter((car) => car.featured === true);
    let maxPrice = Math.max(...cars.map((item) => item.price));
    let maxSize = Math.max(...cars.map((item) => item.size));
    setState((prevState) => ({
      ...prevState,
      cars,
      featuredCars,
      sortedCars: cars,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    }));
  };

  const formatData = (items) => {
    return items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);

      return { ...item.fields, images, id };
    });
  };

  const getCar = (slug) => {
    const { cars } = state;
    return cars.find((car) => car.slug === slug);
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    // Use functional update to get the latest state
    setState((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };
  
      // Call filterCars with the latest state
      filterCars(newState);
  
      return newState;
    });
  };

  const filterCars = (currentState) => {
    let {
      cars,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      automatic,
      electric,
    } = currentState;
  
    let tempCars = [...cars];

    if (type !== 'all') {
      tempCars = tempCars.filter((car) => car.type === type);
    }

    if (capacity !== 'all') {
      capacity = parseInt(capacity);
      tempCars = tempCars.filter((car) => car.capacity === capacity);
    }

    price = parseInt(price);
    tempCars = tempCars.filter((car) => car.price <= price);

    tempCars = tempCars.filter((car) => car.size >= minSize && car.size <= maxSize);

    if (automatic) {
      tempCars = tempCars.filter((car) => car.automatic === true);
    }

    if (electric) {
      tempCars = tempCars.filter((car) => car.electric === true);
    }

    setState((prevState) => ({
      ...prevState,
      sortedCars: tempCars,
    }));
  };

  return (
    <CarContext.Provider
      value={{
        ...state,
        getCar,
        handleChange,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

const CarConsumer = CarContext.Consumer;

const withCarConsumer = (Component) => (props) => (
  <CarConsumer>
    {(value) => <Component {...props} context={value} />}
  </CarConsumer>
);

export { CarProvider, CarConsumer, withCarConsumer, CarContext };