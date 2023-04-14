import styles from './Search.module.css';

import GlogalNav from '../navigations/GlobalNav';
import RegisterForm from '../home/main_content/RegisterForm';
import Footer from '../home/Footer';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { useLocation } from 'react-router-dom';
const Search = () => {
  const location = useLocation();
  console.log('search jsx', location.state);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles['header-inner']}>
          <GlogalNav />
        </div>
      </header>
      <div className={styles.container}>
        <SearchBar
          location={location.state.location}
          date={location.state.dateRange}
          quantity={location.state.quantity}
        />
        <SearchResult />
      </div>
      <RegisterForm />

      <Footer />
    </div>
  );
};

export default Search;
