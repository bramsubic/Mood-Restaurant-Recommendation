import React from 'react';
import styles from './RecipeItem.module.css';

function RecipeItem({ recipe }) {
  return (
    <div className={styles.recipeItem}>
      <h2>{recipe.name}</h2>
      <button className={styles.viewButton}>View Recipe</button>
    </div>
  );
}

export default RecipeItem;