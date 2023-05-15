import AuthForm from '../components/Auth/AuthForm';
import { json } from 'react-router-dom';

import { Redirect } from 'react-router-dom'
const AuthPage = () => {
  return <AuthForm />;
};

export const authAction = async (search, data) => {

  const searchParams = new URLSearchParams(search);
  const isLogin = searchParams.get('mode') === 'login';
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${isLogin ? 'signInWithPassword' : 'signUp'}?key=${process.env.REACT_APP_API_KEY}`
  try {

    const response = await fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: data.email, password: data.password, returnSecureToken: true }) })
    const resData = await response.json();
    if (isLogin) {
      console.log('login')
      localStorage.setItem('loginToken', resData.idToken);
      const now = new Date();
      now.setHours(now.getHours() + 1)
      const expiration = now
      localStorage.setItem('expiration', expiration);

    }
  } catch (errors) {
    console.log(errors)
  }
}
export default AuthPage;
