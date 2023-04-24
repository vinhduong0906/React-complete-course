import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authReducer';
const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className={styles.header}>
      <h1>Redux Auth</h1>

      {authenticated && (
        <ul>
          <li>
            <a href='#'>My Products</a>
          </li>
          <li>
            <a href='#'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Header;
