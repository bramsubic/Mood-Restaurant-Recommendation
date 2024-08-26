import { useState } from "react";
import styles from "./CreateCookbook.module.css";

function CreateCookbook({ onCreate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCreate = () => {
    onCreate({ name: folderName, isPrivate });
    handleClose();
  };

  return (
    <div className={styles.createFolderContainer}>
      <button className={styles.createButton} onClick={handleOpen}>
        Create New Cookbook
      </button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Create Cookbook</h2>
            <label className="cookbookLabel">
              Title
              <input
                type="text"
                placeholder="e.g. Smoothies"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                className={styles.input}
              />
            </label>

                    <div className="form-check form-switch p-0 m-0 w-100 d-flex align-items-center">
                    <label className="form-check-label w-100" htmlFor="flexSwitchCheckDefault"
                    > {isPrivate ? "Private Folder" : "Public Folder"} </label>
                    <input
                        className="form-check-input m-0 p-0"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        checked={isPrivate}
                        onChange={() => setIsPrivate(!isPrivate)}
                    />
                    </div>
            <div className={styles.actions}>
              <button className={styles.saveButton} onClick={handleCreate}>
                Create
              </button>
              <button className={styles.cancelButton} onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateCookbook;
