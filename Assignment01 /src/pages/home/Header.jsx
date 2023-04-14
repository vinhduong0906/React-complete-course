import styles from './Header.module.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import useComponentVisible from './custom-hooks/useComponentVisible';
import DatePicker from './usefull_components/DatePicker';
import QtySearchInput from './usefull_components/QtySearchInput';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchDate, setSearchDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const [searchQty, setSearchQty] = useState(null);
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState('');

  const SearchHandler = () => {
    navigate('/search', {
      state: {
        location: searchLocation,
        dateRange: searchDate,
        quantity: searchQty,
      },
    });

    return;
  };

  const searchLocationChangeHandler = (e) => {
    e.target.value && setSearchLocation(e.target.value);
  };
  return (
    <div className={styles.header}>
      <h3>A lifetime of discounts? It Genius.</h3>
      <p>
        Get rewarded for your travels - unlock instan savings of 10% or more
        with a free acount
      </p>
      <button>Sign in/ Register</button>

      <div className={styles.wrapper}>
        <input
          onChange={searchLocationChangeHandler}
          id='searchLocation'
          name='searchLocation'
          type='text'
          placeholder='&#xf238; Where are you going?'
        />
        <DatePicker setDateData={setSearchDate} searchDateData={searchDate} />
        <QtySearchInput setQtyData={setSearchQty} />
        <button onClick={SearchHandler}>Search</button>
      </div>
    </div>
  );
};
export default Header;
