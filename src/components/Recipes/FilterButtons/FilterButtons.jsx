import React from "react";
import styles from "./FilterButtons.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function FilterButtons() {
  return (
    <div className={styles.filters}>
      <div className={styles.centerBtn}>
      <div className={styles.results}>
        <div>Filter Results</div>
        <div>0 items</div>
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.custombtn}
          type="button"
          id="dropdownIngredients"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Popular
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownIngredients">
          <li>
            <a className="dropdown-item" href="#">
              Quick
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Easy
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Weeknight Meals
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Breakfast
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Lunch
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Dinner
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Dessert
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Main
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Side
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Starter
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Snack
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.btnGroup}>
        <button
          className={styles.custombtn}
          type="button"
          id="dropdownCuisine"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Diets
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownCuisine">
          <li>
            <a className="dropdown-item" href="#">
              Vegetarian
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Vegan
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Gluten Free
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Dairy Free
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Nut Free
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Keto
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Raw
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.btnGroup}>
        <button
          className={styles.custombtn}
          type="button"
          id="dropdownTotalTime"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Cuisines
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownTotalTime">
          <li>
            <a className="dropdown-item" href="#">
              African
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              East African
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              North African
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              West African
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              American
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Asian
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              East Asian
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              South Asian
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Southeast Asian
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Caribbean
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              European
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Latin American
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Central American
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              South American
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Mediterranean
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Middle Eastern
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default FilterButtons;
