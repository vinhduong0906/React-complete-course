import styles from './NavBar.module.css';
const NavBar = (props) => {
  const navBarItems = props.navBarData.map((item) => {
    return (
      <div
        className={`${styles['nav-item']} ${item.active ? styles.active : ''}`}
        key={item.type}
      >
        <i className={`fa ${item.icon} ${styles['white-icon-color']}`}>
          {item.type}
        </i>
      </div>
    );
  });
  return navBarItems;
};
export default NavBar;
