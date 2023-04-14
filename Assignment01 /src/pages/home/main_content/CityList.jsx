import styles from './CityList.module.css';
const City = () => {
  const cityData = [
    {
      name: 'Dublin',
      subText: '123 properties',
      image: 'images/city_1.webp',
    },
    {
      name: 'Reno',
      subText: '533 properties',
      image: 'images/city_2.webp',
    },
    {
      name: 'Austin',
      subText: '532 properties',
      image: 'images/city_3.webp',
    },
  ];

  const cityList = cityData.map((city) => {
    return (
      <div className={styles.city} key={city.name}>
        <img src={city.image} alt={`${city.name}'s image`} />
        <div className={styles.details}>
          <div className={styles.name}>{city.name}</div>
          <div className={styles['sub-text']}>{city.subText}</div>
        </div>
      </div>
    );
  });
  return cityList;
};
export default City;
