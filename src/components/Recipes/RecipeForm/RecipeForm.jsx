import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = ({ onSave }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/recipes', { title });
      console.log('Recipe saved successfully:', response.data);
      onSave(); // Notify parent component of the new recipe
      setTitle(''); // Clear the input field
    } catch (error) {
      console.error('Error saving recipe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default RecipeForm;


// import React, { useState, useEffect } from 'react';
// import { createRecipe, updateRecipe } from '../../../services/api';

// function RecipeForm({ recipe, onSave }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     // ingredients: '',
//     // instructions: '',
//     // notes: '',
//     // prepTime: '',
//     // cookTime: '',
//     // cuisine: '',
//     // cookbooks: []
//   });

//   useEffect(() => {
//     if (recipe) {
//       // Pre-fill the form if recipe is provided
//       console.log('Pre-filling form with recipe:', recipe);
//       setFormData({
//         title: recipe.title || '',
//         // ingredients: recipe.ingredients || '',
//         // instructions: recipe.instructions || '',
//         // notes: recipe.notes || '',
//         // prepTime: recipe.prepTime || '',
//         // cookTime: recipe.cookTime || '',
//         // cuisine: recipe.cuisine || '',
//         // cookbooks: recipe.cookbooks || []
//       });
//     }
//   }, [recipe]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(`Changing ${name} to ${value}`);
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted with data:', formData);
//     try {
//       if (recipe && recipe._id) {
//         // Update the existing recipe
//         console.log('Updating recipe with ID:', recipe._id);
//         await updateRecipe(recipe._id, formData);
//       } else {
//         // Create a new recipe
//         console.log('Creating new recipe with data:', formData);
//         await createRecipe(formData);
//       }
//       console.log('Recipe saved successfully, calling onSave');
//       onSave(); // Close the modal on success
//     } catch (error) {
//       console.error('Error saving recipe:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
//       {/* <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Ingredients" required />
//       <textarea name="instructions" value={formData.instructions} onChange={handleChange} placeholder="Instructions" required />
//       <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes" />
//       <input type="text" name="prepTime" value={formData.prepTime} onChange={handleChange} placeholder="Prep Time" />
//       <input type="text" name="cookTime" value={formData.cookTime} onChange={handleChange} placeholder="Cook Time" />
//       <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} placeholder="Cuisine" /> */}
//       <button type="submit">{recipe && recipe._id ? 'Update Recipe' : 'Save Recipe'}</button>
//     </form>
//   );
// }

// export default RecipeForm;
