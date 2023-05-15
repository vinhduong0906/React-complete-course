
import { useContext, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { logout } from "../store/reducers";
import { useDispatch } from "react-redux";
const SignOut = () => {
    console.log('sign out called')
    const dispatch = useDispatch();
    localStorage.removeItem('loginToken');
    localStorage.removeItem('expiration');
    useEffect(() => { dispatch(logout()) }, [])

    return <Redirect to='/auth'></Redirect>;
}

export default SignOut
