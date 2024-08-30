import React from 'react';
import styles from './RecipeItem.module.css';

function RecipeItem({ recipe, onEdit, onDelete }) {
  return (
    <div className={styles.recipeItem}>
      <h3>{recipe.title}</h3>
      {/* <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Notes:</strong> {recipe.notes}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
      <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p> */}
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default RecipeItem;
