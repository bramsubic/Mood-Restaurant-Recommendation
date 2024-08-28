import React, { useState } from 'react';
import RecipeForm from '../RecipeForm/RecipeForm'; 
import styles from './RecipeModal.module.css';

function RecipeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Add a Recipe</h2>
        <RecipeForm onSave={onClose} />
      </div>
    </div>
  );
}

export default RecipeModal;
