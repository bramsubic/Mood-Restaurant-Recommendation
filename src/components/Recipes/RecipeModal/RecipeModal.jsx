import React from 'react';
import RecipeForm from '../RecipeForm/RecipeForm'; 
import styles from './RecipeModal.module.css';

function RecipeModal({ isOpen, onClose, recipe, onSave }) {
  if (!isOpen) {
    console.log('Modal is closed');
    return null;
  }

  console.log('Modal is open with recipe:', recipe);
  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>{recipe ? 'Edit Recipe' : 'Add a Recipe'}</h2>
        <RecipeForm recipe={recipe} onSave={onSave} />
      </div>
    </div>
  );
}

export default RecipeModal;
