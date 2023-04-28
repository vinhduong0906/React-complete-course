import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className={styles.main}>
      <MainNavigation />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
