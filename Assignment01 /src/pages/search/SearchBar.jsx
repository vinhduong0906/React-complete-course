import styles from './SearchBar.module.css';
import { useState } from 'react';
import DatePicker from '../home/usefull_components/DatePicker';
const SearchBar = ({ date, quantity, location }) => {
  const [searchDate, setSearchDate] = useState(date);
  const [searchQty, setSearchQty] = useState(quantity);
  const [searchLocation, setSearchLocation] = useState(location);

  console.log('search bar', searchDate, searchQty, searchLocation);
  return (
    <div className={styles['search-bar']}>
      <div className={styles.title}>Search </div>
      <label>Destination</label>
      <input
        type='text'
        defaultValue={searchLocation ? searchLocation : ''}
      ></input>
      <label>Check-in Date</label>
      <DatePicker setDateData={setSearchDate} searchDateData={searchDate} />
      <label>Options</label>
      <div className={styles.options}>
        <div>
          <label htmlFor='min-price'>Min price per night</label>
          <input type='number' id='min-price' min={0}></input>
        </div>
        <div>
          <label htmlFor='max-price'>Max price per night</label>
          <input type='number' id='max-price' min={0}></input>
        </div>
        <div>
          <label htmlFor='adult'>Adult</label>
          <input
            type='number'
            id='adult'
            min={0}
            defaultValue={searchQty && searchQty.adult}
          ></input>
        </div>
        <div>
          <label htmlFor='children'>Children</label>
          <input
            type='number'
            id='children'
            min={0}
            defaultValue={searchQty && searchQty.children}
          ></input>
        </div>
        <div>
          <label htmlFor='room'>Room</label>
          <input
            type='number'
            id='room'
            min={0}
            defaultValue={searchQty && searchQty.room}
          ></input>
        </div>
      </div>
      <button type='submit'>Search</button>
    </div>
  );
};
export default SearchBar;
