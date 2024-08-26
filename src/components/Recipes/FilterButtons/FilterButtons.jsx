import React from 'react';
import styles from './FilterButtons.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FilterButtons() {
  return (
    <div className={styles.filters}>
      <div className="btn-group">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownIngredients"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Ingredients
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownIngredients">
          <li><a className="dropdown-item" href="#">Vegetables</a></li>
          <li><a className="dropdown-item" href="#">Fruits</a></li>
          <li><a className="dropdown-item" href="#">Dairy</a></li>
        </ul>
      </div>

      <div className="btn-group">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownCuisine"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Cuisine
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownCuisine">
          <li><a className="dropdown-item" href="#">Italian</a></li>
          <li><a className="dropdown-item" href="#">Mexican</a></li>
          <li><a className="dropdown-item" href="#">Chinese</a></li>
        </ul>
      </div>

      <div className="btn-group">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownTotalTime"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Total Time
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownTotalTime">
          <li><a className="dropdown-item" href="#">30 minutes</a></li>
          <li><a className="dropdown-item" href="#">1 hour</a></li>
          <li><a className="dropdown-item" href="#">2 hours</a></li>
        </ul>
      </div>
    </div>
  );
}

export default FilterButtons;
