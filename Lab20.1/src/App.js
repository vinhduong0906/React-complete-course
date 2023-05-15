import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import SignOut from './pages/SignOut';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { getAuthToken } from './ultil/auth';
import { useDispatch } from 'react-redux';
import { login } from './store/reducers';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  const checkLogin = () => {

    if (localStorage.getItem('loginToken')) dispatch(login());
  }
  useEffect(() => {
    checkLogin()

  }, [])

  const isLogin = useSelector(state => state.auth.isLogin)
  const history = useHistory();

  useEffect(() => {
    // if isUserLoggedIn turned to true redirect to /home
    if (isLogin) {
      history.push("/");
    }
  }, [isLogin]);
  return (

    <Layout>
      {!isLogin ? <Switch><Route path='/' >
        <AuthPage />
      </Route></Switch> :
        <Switch>

          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/auth'>
            <AuthPage />
          </Route>
          <Route path='/profile'>
            <UserProfile />
          </Route>
          <Route path='/signout'>
            <SignOut />
          </Route>
          <Route path="*" component={() => "404 Not found."} />
        </Switch>}
    </Layout>
  );
}

export default App;
