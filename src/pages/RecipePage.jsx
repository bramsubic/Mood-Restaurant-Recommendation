import RecipeForm from '../components/Recipes/RecipeForm/RecipeForm';
import RecipeList from '../components/Recipes/RecipeList/RecipeList';

const App = () => {
  return (
    <div>
      <RecipeForm
        onSave={() => {
          // Handle any actions after saving a recipe
          window.location.reload(); // Reload to update the recipe list
        }}
      />
      <RecipeList />
    </div>
  );
};

export default App;


// import React, { useState, useEffect } from 'react';
// import FilterButtons from "../components/Recipes/FilterButtons/FilterButtons";
// import ImportRecipe from "../components/Recipes/ImportRecipeButton/ImportReceipe";
// import RecipeModal from "../components/Recipes/RecipeModal/RecipeModal";
// import CreateCookbook from "../components/Recipes/CreateCookbook/CreateCookbook";
// import RecipeList from "../components/Recipes/RecipeList/RecipeList";
// import { getRecipes, createRecipe, updateRecipe, deleteRecipe } from '../services/api';
// import styles from "./RecipePage.module.css";

// function RecipePage() {
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);
//   const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

//   useEffect(() => {
//     // Fetch recipes on component mount
//     const fetchRecipes = async () => {
//       try {
//         const fetchedRecipes = await getRecipes();
//         console.log('Fetched recipes:', fetchedRecipes);
//         setRecipes(fetchedRecipes);
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       }
//     };
//     fetchRecipes();
//   }, []);

//   const openRecipeModal = (recipe = null) => {
//     console.log('Opening modal with recipe:', recipe);
//     setSelectedRecipe(recipe);
//     setIsRecipeModalOpen(true);
//   };

//   const closeRecipeModal = () => {
//     console.log('Closing modal');
//     setIsRecipeModalOpen(false);
//     setSelectedRecipe(null);
//   };

//   const handleSaveRecipe = async (recipeData) => {
//     console.log('handleSaveRecipe called with:', recipeData);
//     try {
//       let updatedRecipes;
//       if (selectedRecipe) {
//         // Update the recipe
//         const updatedRecipe = await updateRecipe(selectedRecipe._id, recipeData);
//         updatedRecipes = recipes.map(r => r._id === updatedRecipe._id ? updatedRecipe : r);
//       } else {
//         // Add a new recipe
//         const newRecipe = await createRecipe(recipeData);
//         updatedRecipes = [...recipes, newRecipe];
//       }
//       setRecipes(updatedRecipes);
//       console.log('Updated recipe list:', updatedRecipes);
//       closeRecipeModal();
//       alert('Recipe saved successfully!');
//     } catch (error) {
//       console.error('Error saving recipe:', error);
//     }
//   };
  

//   const handleDeleteRecipe = async (recipeId) => {
//     try {
//       await deleteRecipe(recipeId);
//       setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
//     } catch (error) {
//       console.error('Error deleting recipe:', error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <div className={styles.headerLeft}>
//           <ImportRecipe openModal={() => openRecipeModal()} />
//           <RecipeModal
//             isOpen={isRecipeModalOpen}
//             onClose={closeRecipeModal}
//             recipe={selectedRecipe}
//             onSave={handleSaveRecipe}
//           />
//           {/* <CreateCookbook /> */}
//         </div>
//       </header>
//       <main className={styles.main}>
//         {/* <FilterButtons /> */}
//         <RecipeList
//           recipes={recipes}
//           onEdit={openRecipeModal}
//           onDelete={handleDeleteRecipe}
//         />
//       </main>
//     </div>
//   );
// }

// export default RecipePage;
