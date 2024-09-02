import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeList.module.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className={styles.recipeList}>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id} className={styles.recipeItem}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
