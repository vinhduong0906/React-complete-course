import React, { useState, useEffect, useRef } from 'react';

const useComponentVisible = (initValue) => {
  const [visible, setVisible] = useState(initValue);
  const ref = useRef(null);

  const handleHidePicker = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };
  console.log('has called');
  useEffect(() => {
    document.addEventListener('keydown', handleHidePicker, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHidePicker, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return { ref, visible, setVisible };
};
export default useComponentVisible;
