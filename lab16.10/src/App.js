import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Auth from './components/Auth';
function App() {
  return (
    <div className='App'>
      <Header />
      <Auth />
      <UserProfile />
      <Counter />
    </div>
  );
}

export default App;
