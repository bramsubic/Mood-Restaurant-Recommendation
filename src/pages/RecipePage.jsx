import React from "react";
import SearchBar from "../components/Recipes/SearchBar/SearchBar";
import FilterButtons from "../components/Recipes/FilterButtons/FilterButtons";
import ImportRecipe from "../components/Recipes/ImportRecipeButton/ImportReceipe";
// import CreateCookbook from "../components/Recipes/CreateCookbook/CreateCookbook";
import RecipeList from "../components/Recipes/RecipeList/RecipeList";
import styles from "./RecipePage.module.css";

function RecipePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          {/* <CreateCookbook /> */}
          <ImportRecipe />
        </div>
        <div className={styles.headerRight}>
          <SearchBar />
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
