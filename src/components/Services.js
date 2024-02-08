import React from 'react';
import Title from '../components/Title';
import { FaShuttleVan, FaMapMarkerAlt, FaWrench } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Flexible Locations',
      info: 'Pick up a car at one location and drop it off at another, providing flexibility and convenience',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Airport Shuttle Service',
      info: 'Convenient shuttle service to and from airports',
    },
    {
      icon: <FaWrench />,
      title: 'Roadside Assistance',
      info: '24/7 roadside assistance in case of breakdowns, flat tires, or other unexpected issues',
    },
  ];

  return (
    <section className='services'>
      <Title title='Services' />
      <div className='services-center'>
        {services.map((item, index) => (
          <article key={index} className='service'>
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;