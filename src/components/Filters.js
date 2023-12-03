import React from 'react';

const Filters = () => {
  return (
    <div>
      <h2>Filters</h2>
      <div>
        <label htmlFor="category">Select Category:</label>
        <select id="category">
          <option value="all">All</option>
          <option value="appetizers">Appetizers</option>
          <option value="entrees">Entrees</option>
          <option value="desserts">Desserts</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">Price Range:</label>
        <input type="range" id="price" name="price" min="0" max="100" />
      </div>
      {/* Add more filter options or UI elements as needed */}
    </div>
  );
};

export default Filters;
