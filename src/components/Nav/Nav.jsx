import { useState } from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const removeActive = () => {
        setIsActive(false);
    };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to="/" className={`${styles.logo}`}>Cookbook </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to="/recipes" className={`${styles.navLink}`}>Recipes</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/groceries" className={`${styles.navLink}`}>Groceries</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/plan" className={`${styles.navLink}`}>Meal Plan</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/explore" className={`${styles.navLink}`}>Explore Recipes</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/blog" className={`${styles.navLink}`}>Blog</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Nav;
;