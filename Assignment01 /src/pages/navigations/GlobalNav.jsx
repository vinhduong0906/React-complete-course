import NavBar from './NavBar';
import styles from './GlobalNav.module.css';
const GlogalNav = () => {
  const navBarData = [
    {
      type: 'Stays',
      icon: 'fa-bed',
      active: true,
    },
    {
      type: 'Flights',
      icon: 'fa-plane',
      active: false,
    },
    {
      type: 'Car rentals',
      icon: 'fa-car',
      active: false,
    },
    {
      type: 'Attractions',
      icon: 'fa-bed',
      active: false,
    },
    {
      type: 'Airport taxis',
      icon: 'fa-taxi',
      active: false,
    },
  ];
  return (
    <div>
      <div className={styles['title-bar']}>
        <h1>Booking website</h1>
        <div className={styles['btn-login']}>
          <button>Register</button>
          <button>Log in</button>
        </div>
      </div>
      <div className={styles['main-nav']}>
        <NavBar navBarData={navBarData} />
      </div>
    </div>
  );
};
export default GlogalNav;
