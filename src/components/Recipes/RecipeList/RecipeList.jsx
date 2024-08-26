import React, { useState } from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';
import CreateCookbook from '../CreateCookbook/CreateCookbook';
import styles from './RecipeList.module.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Spaghetti Carbonara' },
    // Add initial recipes or start with an empty array
  ]);

  const [folders, setFolders] = useState([
    { id: 1, name: 'All Recipes', isPrivate: false },
    { id: 2, name: 'Breakfast', isPrivate: false },
    { id: 3, name: 'Lunch', isPrivate: false },
    { id: 4, name: 'Dinner', isPrivate: false },
  ]);

  const handleCreateFolder = (newFolder) => {
    setFolders([...folders, { ...newFolder, id: folders.length + 1 }]);
  };

  return (
    <div className={styles.recipeList}>
      {/* Create a new folder (cookbook) */}

      <div className={styles.createButton}>

      <CreateCookbook onCreate={handleCreateFolder} />
      </div>

      {/* Display folders */}
      {folders.map((folder) => (
        <div key={folder.id} className={styles.folder}>
          <h2>{folder.name}</h2>
          <p>{folder.count}0 recipes</p>
        </div>
      ))}

      {/* Display individual recipes */}
      {/* {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))} */}
    </div>
  );
}

export default RecipeList;
