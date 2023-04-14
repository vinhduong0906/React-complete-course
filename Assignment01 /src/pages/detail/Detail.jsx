import GlogalNav from '../navigations/GlobalNav';
import RegisterForm from '../home/main_content/RegisterForm';
import Footer from '../home/Footer';
import styles from './Detail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Detail = () => {
  const detailData = {
    name: 'Tower Street Apartments',
    address: 'Elton St 125 New york',
    distance: 'Excellent location - 500m from center',
    price: 'Book a stay over $114 at this property and get a free airport taxi',
    photos: [
      './images/hotel_detail_1.jpg',
      './images/hotel_detail_2.jpg',
      './images/hotel_detail_3.jpg',
      './images/hotel_detail_4.jpg',
      './images/hotel_detail_5.jpg',
      './images/hotel_detail_6.jpg',
    ],
    title: 'Stay in the heart of City',
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };
  const images = detailData.photos.map((url) => {
    return <img src={url} alt={url} key={url} />;
  });
  return (
    <div>
      <header className={styles.header}>
        <div className={styles['header-inner']}>
          <GlogalNav />
        </div>
      </header>
      <div className={`${styles.container} ${styles.detail}`}>
        <div className={styles['detail-info']}>
          <div className={styles.infomation}>
            <h3>{detailData.name}</h3>
            <div className={styles.address}>
              <i className='fa fa-map-marker'></i>
              {detailData.address}
            </div>
            <div className={styles.distance}>{detailData.distance}</div>
            <div className={styles.price}>{detailData.price}</div>
          </div>
          <button>Reserve or Book Now!</button>
        </div>
        <div className={styles.photo}>{images}</div>
        <div className={styles.description}>
          <div className={styles['description-text']}>
            <h3>Stay in the heart of City</h3>
            <p>{detailData.description}</p>
          </div>
          <div className={styles.deal}>
            <h4>Perfect for a 9-night stay!</h4>
            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <div className={styles['deal-price']}>
              ${detailData.nine_night_price}
              <span>(9 night)</span>
            </div>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <RegisterForm />

      <Footer />
    </div>
  );
};

export default Detail;
