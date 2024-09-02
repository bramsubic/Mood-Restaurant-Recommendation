import React from 'react';
import styles from './RecipeModal.module.css';

const RecipeModal = ({ children }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
  );
};

export default RecipeModal;

