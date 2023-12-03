import React from 'react';

const Map = ({ latitude, longitude }) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;

  return (
    <div>
      <h2>Map</h2>
      <p>Click the link below to view the location on Google Maps:</p>
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        Open in Google Maps
      </a>
    </div>
  );
};

export default Map;