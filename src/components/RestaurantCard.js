import React from 'react';
import Map from './Map';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.ambiance.description}</p>
      <p>Chef: {restaurant.chef.name}</p>
      <p>Signature Dish: {restaurant.chef.signature_dish}</p>
      <p>Location: {restaurant.location.address}</p>
      <Map latitude={restaurant.location.latitude} longitude={restaurant.location.longitude} />

      <h3>Awards:</h3>
      <ul>
        {restaurant.awards.map((award, index) => (
          <li key={index}>
            {award.year} - {award.organization}: {award.award}
          </li>
        ))}
      </ul>

      <h3>Sustainability Initiatives:</h3>
      <ul>
        {restaurant.sustainability.initiatives.map((initiative, index) => (
          <li key={index}>
            {initiative.name}: {initiative.description}
          </li>
        ))}
      </ul>

      <h3>Upcoming Events:</h3>
      <ul>
        {restaurant.events.upcoming_events.map((event, index) => (
          <li key={index}>
            {event.name} - Date: {event.date}, Description: {event.description}
          </li>
        ))}
      </ul>

      <h3>Online Presence:</h3>
      <p>Website: {restaurant.online_presence.website}</p>
      <p>Follow us on social media:</p>
      <ul>
        {Object.entries(restaurant.online_presence.social_media).map(([platform, link], index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default RestaurantCard;