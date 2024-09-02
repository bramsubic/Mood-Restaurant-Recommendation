import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeForm from "../components/Recipes/RecipeForm/RecipeForm";
import styles from "./RecipePage.module.css";

const IndividualRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:5001/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleUpdateRecipe = async (updatedRecipe) => {
    try {
      const response = await fetch(`http://localhost:5001/recipes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRecipe),
      });

      if (response.ok) {
        setRecipe(updatedRecipe);
        setIsEditing(false);
      } else {
        console.error('Error updating recipe');
      }
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  const handleDeleteRecipe = async () => {
    try {
      const response = await fetch(`http://localhost:5001/recipes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/recipes'); // Redirect to the recipe list page
      } else {
        console.error('Error deleting recipe');
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div className={styles.container}>
      {recipe && !isEditing ? (
        <>
          <h2>{recipe.title}</h2>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDeleteRecipe}>Delete</button>
        </>
      ) : (
        <RecipeForm
          initialTitle={recipe ? recipe.title : ''}
          onSave={handleUpdateRecipe}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default IndividualRecipePage;
