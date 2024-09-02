import React, { useState, useEffect } from "react";
import RecipeForm from "../components/Recipes/RecipeForm/RecipeForm";
import RecipeList from "../components/Recipes/RecipeList/RecipeList";
import RecipeModal from "../components/Recipes/RecipeModal/RecipeModal";
import styles from "./RecipePage.module.css";

const RecipePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:5001/recipes");
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSaveRecipe = async (newRecipe) => {
    try {
      const response = await fetch('http://localhost:5001/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        fetchRecipes(); 
        handleCloseModal(); 
      } else {
        console.error('Error saving recipe:', await response.text());
      }
    } catch (error) {
      console.error('Error saving recipe:', error);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleOpenModal} className={styles.addRecipeBtn}>
        Add Recipe
      </button>

      {showModal && (
        <RecipeModal onClose={handleCloseModal}>
          <RecipeForm onSave={handleSaveRecipe} onCancel={handleCloseModal} />
        </RecipeModal>
      )}

      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipePage;
