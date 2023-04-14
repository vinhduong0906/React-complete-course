import styles from './RegisterForm.module.css';
const RegisterForm = () => {
  return (
    <div className={styles['register-form']}>
      <div className={styles.slogan}>Save time, save money!</div>
      <p>Sign up and we'll send the best deals to you</p>

      <input type='text' placeholder='Your email'></input>
      <button>Subscribe</button>
    </div>
  );
};
export default RegisterForm;
