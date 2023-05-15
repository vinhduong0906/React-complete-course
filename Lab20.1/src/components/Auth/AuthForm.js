import { useState, useContext } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useMemo } from 'react';
import classes from './AuthForm.module.css';
import { useParams, Link } from 'react-router-dom';
import { authAction } from '../../pages/AuthPage';
import { useDispatch } from 'react-redux';
import { login } from '../../store/reducers';
const AuthForm = () => {
  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const isLogin = searchParams.get('mode') === 'login';
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const data = { email: event.target.email.value, password: event.target.password.value }
    authAction(search, data);

    if (isLogin) {
      dispatch(login());
      // window.location.replace('/')
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
          <Link
            className={classes.toggle}
            to={`?mode=${isLogin ? 'signup' : 'login'}`}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </Link>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
