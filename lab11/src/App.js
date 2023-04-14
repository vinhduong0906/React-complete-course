import logo from './logo.svg';
import './App.css';

import UserContext from './components/store/UserContext';
import Users from './components/Users';
import UserFinder from './components/UserFinder';
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];
function App() {
  const userList = { users: DUMMY_USERS };
  return (
    <UserContext.Provider value={userList}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;
