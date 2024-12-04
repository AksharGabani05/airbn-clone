import React, { useState } from "react";
import "./Filter";

function Filter({ setSelectedFilter }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000); // Default maximum price
  const [minRating, setMinRating] = useState(0);

  const handleApplyFilter = () => {
    setSelectedFilter({
      minPrice: parseInt(minPrice, 10),
      maxPrice: parseInt(maxPrice, 10),
      minRating: parseFloat(minRating),
    });
  };

  return (
    <div className="filter-container">
      <div className="filter-item">
        <label>Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="filter-item">
        <label>Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="filter-item">
        <label>Min Rating:</label>
        <input
          type="number"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          step="0.1"
          min="0"
          max="5"
        />
      </div>
      <button onClick={handleApplyFilter} className="apply-filter-btn">
        Apply Filter
      </button>
    </div>
  );
}

export default Filter;
