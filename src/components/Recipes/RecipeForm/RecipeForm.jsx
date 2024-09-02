import React, { useState } from 'react';
import styles from './RecipeForm.module.css';

const RecipeForm = ({ initialTitle = '', onSave, onCancel }) => {
  const [title, setTitle] = useState(initialTitle);

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSave({ title });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.titleContainer}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      
      <div className={styles.formContainerBtn}>
      <button type="submit" className={styles.saveBtn}>Save</button>
      {onCancel && (<button type="button" onClick={onCancel} className={styles.cancelBtn}>
          Cancel
        </button>
      )}</div>
    </form>
  );
};

export default RecipeForm;

