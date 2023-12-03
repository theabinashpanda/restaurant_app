import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Filters from './Filters';
import Map from './Map';
import api from '../services/api';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurant data from the API
    api.get('/restaurants')
      .then(response => setRestaurants(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Filters />
      <Map />

      <h1>Restaurant List</h1>

      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
