import styles from './PropertyTypeList.module.css';
const PropertyTypeList = () => {
  const typeListData = [
    {
      name: 'Hotels',
      count: 233,
      image: './images/type_1.webp',
    },
    {
      name: 'Apartments',
      count: 2331,
      image: './images/type_2.jpg',
    },
    {
      name: 'Resorts',
      count: 2331,
      image: './images/type_3.jpg',
    },
    {
      name: 'Villas',
      count: 2331,
      image: './images/type_4.jpg',
    },
    {
      name: 'Cabins',
      count: 2331,
      image: './images/type_5.jpg',
    },
  ];
  const typeListContent = typeListData.map((type) => {
    return (
      <div className={styles.type} key={type.name}>
        <img src={type.image} alt={`${type.name}'s photo`} />
        <div className={styles.details}>
          <div className={styles.name}>{type.name}</div>
          <div className={styles.count}>{type.count} hotels</div>
        </div>
      </div>
    );
  });
  return typeListContent;
};
export default PropertyTypeList;
