import { useState } from 'react'
import FilterButtons from "../components/Recipes/FilterButtons/FilterButtons";
import ImportRecipe from "../components/Recipes/ImportRecipeButton/ImportReceipe";
import RecipeModal from "../components/Recipes/RecipeModal/RecipeModal";
import CreateCookbook from "../components/Recipes/CreateCookbook/CreateCookbook";
import RecipeList from "../components/Recipes/RecipeList/RecipeList";
import styles from "./RecipePage.module.css";

function RecipePage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

  const openRecipeModal = () => setIsRecipeModalOpen(true);
  const closeRecipeModal = () => setIsRecipeModalOpen(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <ImportRecipe openModal={openRecipeModal} />
          <RecipeModal isOpen={isRecipeModalOpen} onClose={closeRecipeModal} />
          <CreateCookbook />
        </div>
      </header>
      <main className={styles.main}>
        <FilterButtons />
        <RecipeList />
      </main>
    </div>
  );
}

export default RecipePage;
