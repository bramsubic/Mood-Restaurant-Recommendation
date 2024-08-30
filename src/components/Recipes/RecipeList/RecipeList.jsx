// src/components/RecipeList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:5001/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;


// import React from 'react';
// import RecipeItem from '../RecipeItem/RecipeItem'; 
// import styles from './RecipeList.module.css';

// function RecipeList({ recipes, onEdit, onDelete }) {
//   return (
//     <div className={styles.recipeList}>
//       {recipes.length > 0 ? (
//         recipes.map((recipe) => (
//           <RecipeItem
//             key={recipe._id}
//             recipe={recipe}
//             onEdit={() => onEdit(recipe)}
//             onDelete={() => onDelete(recipe._id)}
//           />
//         ))
//       ) : (
//         <p>No recipes found.</p>
//       )}
//     </div>
//   );
// }

// export default RecipeList;
