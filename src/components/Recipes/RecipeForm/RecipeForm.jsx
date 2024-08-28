import React, { useState, useEffect } from 'react';
import { createRecipe, updateRecipe, getRecipeById } from '../../../services/api';

function RecipeForm({ recipeId, onSave }) {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    notes: '',
    prepTime: '',
    cookTime: '',
    cuisine: '',
    cookbooks: []
  });

  useEffect(() => {
    if (recipeId) {
      // Fetch recipe data if recipeId is provided
      const fetchRecipe = async () => {
        try {
          const fetchedRecipe = await getRecipeById(recipeId);
          console.log('Fetched Recipe:', fetchedRecipe); // Log fetched recipe data
          setRecipe(fetchedRecipe);
        } catch (error) {
          console.error('Error fetching recipe:', error);
        }
      };

      fetchRecipe();
    }
  }, [recipeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (recipeId) {
        const updatedRecipe = await updateRecipe(recipeId, recipe); // Update existing recipe
        console.log('Recipe Updated:', updatedRecipe); // Log updated recipe data
      } else {
        const newRecipe = await createRecipe(recipe); // Create new recipe
        console.log('Recipe Created:', newRecipe); // Log newly created recipe data
      }
      onSave(); // Close the modal on success
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={recipe.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} placeholder="Ingredients" required />
      <textarea name="instructions" value={recipe.instructions} onChange={handleChange} placeholder="Instructions" required />
      <textarea name="notes" value={recipe.notes} onChange={handleChange} placeholder="Notes" />
      <input type="text" name="prepTime" value={recipe.prepTime} onChange={handleChange} placeholder="Prep Time" />
      <input type="text" name="cookTime" value={recipe.cookTime} onChange={handleChange} placeholder="Cook Time" />
      <input type="text" name="cuisine" value={recipe.cuisine} onChange={handleChange} placeholder="Cuisine" />
      <button type="submit">{recipeId ? 'Update Recipe' : 'Save Recipe'}</button>
    </form>
  );
}

export default RecipeForm;
