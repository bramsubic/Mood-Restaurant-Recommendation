import React from 'react';
import styles from './ImportRecipe.module.css';

function ImportRecipeButton({ openModal }) {
  return (
    <button className={styles.importButton} onClick={openModal}>
      Import Recipe
    </button>
  );
}

export default ImportRecipeButton;