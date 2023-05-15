import { Fragment } from 'react';

import MainNavigation from './MainNavigation';
import { Redirect } from 'react-router-dom';
import { getAuthToken } from '../../ultil/auth';
const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
