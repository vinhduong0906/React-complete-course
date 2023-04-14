import { useState, useEffect } from 'react';
import useComponentVisible from '../custom-hooks/useComponentVisible';
import { DateRange } from 'react-date-range';
import styles from './DatePicker.module.css';
const DatePicker = ({ searchDateData, setDateData }) => {
  console.log('seach data', searchDateData);
  const {
    ref: datePickerRef,
    visible: datePickerVisible,
    setVisible: setDatePickerVisible,
  } = useComponentVisible(false);
  const [searchDate, setSearchDate] = useState(searchDateData);
  console.log('date picker', searchDate);
  const showDayPickerHandler = (e) => {
    !datePickerVisible && setDatePickerVisible(true);
    return;
  };
  const hideDayPickerHandler = () => {
    setDatePickerVisible(false);
    return;
  };
  useEffect(() => {
    setDateData(searchDate);
    const showDayPickerHandler = (e) => {
      !datePickerVisible && setDatePickerVisible(true);
      return;
    };
    const hideDayPickerHandler = () => {
      setDatePickerVisible(false);
      return;
    };
  }, [searchDate]);

  return (
    <>
      <input
        type='text'
        defaultValue={
          searchDate[0].endDate != null
            ? `${searchDate[0].startDate.toLocaleDateString(
                'en-us'
              )} to ${searchDate[0].endDate.toLocaleDateString('en-us')}`
            : ''
        }
        onMouseEnter={showDayPickerHandler}
        placeholder='&#xf073; 06/24/22 to 06/24/22'
      ></input>
      {datePickerVisible && (
        <div
          ref={datePickerRef}
          className={styles['date-picker']}
          onMouseLeave={hideDayPickerHandler}
        >
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setSearchDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={searchDate}
          />
        </div>
      )}
    </>
  );
};
export default DatePicker;
