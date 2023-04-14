import GlogalNav from '../navigations/GlobalNav';
import styles from './Home.module.css';
import Header from './Header';
import City from './main_content/CityList';
import PropertyTypeList from './main_content/PropertyTypeList';
import HotelList from './main_content/HotelList';
import Footer from './Footer';
import RegisterForm from './main_content/RegisterForm';
const Home = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles['header-inner']}>
          <GlogalNav />
          <Header />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles['city-list']}>
          <City />
        </div>
        <h4>Browse by property type</h4>
        <div className={styles['property-type-list']}>
          <PropertyTypeList />
        </div>
        <h4>Homes guests love</h4>
        <div className={styles['hotel-list']}>
          <HotelList />
        </div>
      </div>

      <RegisterForm />

      <Footer />
    </div>
  );
};

export default Home;
