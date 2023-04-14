import useComponentVisible from '../custom-hooks/useComponentVisible';
import { useState } from 'react';
import styles from './QtySearchInput.module.css';
const QtySearchInput = ({ setQtyData }) => {
  const {
    ref: qtyRef,
    visible: qtyVisible,
    setVisible: setQtyVisible,
  } = useComponentVisible(false);
  const [searchQty, setSearchQty] = useState(null);
  const showQtyInputHandler = () => {
    setQtyVisible(true);
    return;
  };
  const hideQtyInputHandler = () => {
    setQtyVisible(false);
    return;
  };
  const qtyInputSubmit = (e) => {
    e.preventDefault();
    const quantity = {
      adult: e.target.adult.value,
      children: e.target.children.value,
      room: e.target.room.value,
    };
    setSearchQty(quantity);
    setQtyData(quantity);

    setQtyVisible(false);
    return;
  };
  return (
    <>
      <input
        onMouseEnter={showQtyInputHandler}
        type='text'
        placeholder='&#xf183; 1 adult . 0 children .  1 room'
        defaultValue={
          searchQty
            ? ` ${searchQty.adult} adult . ${searchQty.children} children .  ${searchQty.room} room`
            : ''
        }
      ></input>
      {qtyVisible && (
        <div
          ref={qtyRef}
          className={styles['quantity-input']}
          onMouseLeave={hideQtyInputHandler}
        >
          <form onSubmit={qtyInputSubmit}>
            <div>
              <label htmlFor='adult'>Adult</label>
              <input
                id='adult'
                name='adult'
                type='number'
                defaultValue={searchQty ? searchQty.adult : 0}
                min={0}
              ></input>
            </div>
            <div>
              <label htmlFor='children'>Children</label>
              <input
                id='children'
                name='children'
                type='number'
                min={0}
                defaultValue={searchQty ? searchQty.children : 0}
              ></input>
            </div>
            <div>
              <label htmlFor='room'>Room</label>
              <input
                id='room'
                name='room'
                type='number'
                min={0}
                defaultValue={searchQty ? searchQty.room : 0}
              ></input>
            </div>
            <button type='submit'>OK</button>
          </form>
        </div>
      )}
    </>
  );
};

export default QtySearchInput;
