import styles from './MainNavigation.module.css';
import { NavLink, Link } from 'react-router-dom';
const MainNavigation = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Greate Quotes</div>
      <div className={styles.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to='/quotes'
            >
              All Quotes
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to='/new-quote'
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MainNavigation;
