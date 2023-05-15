import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import SignOut from '../../pages/SignOut';
import { useSelector } from 'react-redux';
const MainNavigation = () => {
  const isLogin = useSelector(state => state.auth.isLogin)
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogin ? <li>
            <Link to='/auth?mode=login'>Login</Link>
          </li> : ''}
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          {isLogin ? <li>
            <Link to='/signout'>Logout</Link>
          </li> : ''}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
