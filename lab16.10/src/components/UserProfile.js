import styles from './UserProfile.module.css';
import { useSelector, useDispatch } from 'react-redux';
const UserProfile = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  if (authenticated)
    return (
      <div className={styles.profile}>
        <h3>My User Profile</h3>
      </div>
    );
  return;
};
export default UserProfile;
