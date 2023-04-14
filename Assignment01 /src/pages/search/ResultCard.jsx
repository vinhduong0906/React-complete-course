import styles from './ResultCard.module.css';
const ResultCard = (props) => {
  const card = props.card;
  const freeCancel = () => {
    if (!card.free_cancel) return;
    return (
      <div className={styles['free-cancel']}>
        <div>Free cancelation</div>
        <p>You can cancel later, so lock in this great price to day!</p>
      </div>
    );
  };
  const viewDetailHandler = () => {
    window.location.href = '../detail';
  };
  return (
    <div className={styles.card}>
      <img src={card.image_url} alt={card.name + "'s photo"} />

      <div className={styles['card-content']}>
        <h3>{card.name}</h3>
        <div className={styles.distance}>{card.distance} from center</div>
        <div className={styles.tag}>{card.tag}</div>
        <div className={styles.description}>{card.description}</div>
        <div className={styles.type}>{card.type}</div>

        {freeCancel()}
      </div>
      <div className={styles['rate-price']}>
        <div className={styles.rate}>
          {card.rate_text}
          <span>{card.rate}</span>
        </div>
        <div>
          <div className={styles.price}>${card.price}</div>
          <p>Includes tax and fees</p>
          <button onClick={viewDetailHandler}>See availability</button>
        </div>
      </div>
    </div>
  );
};
export default ResultCard;
