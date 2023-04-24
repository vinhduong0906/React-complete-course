import styles from './Auth.module.css';
import useInput from '../hooks/use-input';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authReducer';
const emailValidate = (value) => value.includes('@');
const passwordValidate = (value) => value != '';
const Auth = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();
  const {
    inputValue: emailInputValue,
    hasError: emailHasError,
    inputValid: emailValid,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput(emailValidate);
  const {
    inputValue: pwdInputValue,
    hasError: pwdHasError,
    inputValid: pwdValid,
    inputBlurHandler: pwdBlurHandler,
    inputChangeHandler: pwdChangeHandler,
    reset: pwdReset,
  } = useInput(passwordValidate);
  const authSubmitHandler = (event) => {
    event.preventDefault();
    if (emailValid && pwdValid) {
      dispatch(authActions.login());
      emailReset();
      pwdReset();
    }
  };
  if (!authenticated)
    return (
      <form onSubmit={authSubmitHandler} className={styles.auth}>
        <div className={styles.control}>
          <label>EMAIL</label>
          {emailHasError && (
            <div className={styles['error-text']}>
              You must enter a valid email!
            </div>
          )}
          <input
            type='text'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailInputValue}
          ></input>
          <label>PASSWORD</label>
          {pwdHasError && (
            <div className={styles['error-text']}>You must enter password!</div>
          )}
          <input
            type='password'
            onChange={pwdChangeHandler}
            onBlur={pwdBlurHandler}
            value={pwdInputValue}
          ></input>
          <button type='submit'>Login</button>
        </div>
      </form>
    );
  return;
};
export default Auth;
