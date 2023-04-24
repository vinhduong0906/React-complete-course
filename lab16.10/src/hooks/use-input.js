import React, { useState, useReducer } from 'react';
const initialState = { value: '', isTouch: false };

const useInput = (validateValue) => {
  const inputReducer = (state, action) => {
    if (action.type === 'CHANGE') {
      return { value: action.value, isTouch: state.isTouch };
    }
    if (action.type === 'BLUR') {
      console.log('action blur');
      return { isTouch: true, value: state.value };
    }
    if (action.type === 'RESET') {
      return { value: '', isTouch: false };
    }
  };

  const [state, dispatch] = useReducer(inputReducer, initialState);
  const inputValid = validateValue(state.value);
  const hasError = state.isTouch && !inputValid;
  const inputChangeHandler = (event) => {
    dispatch({ type: 'CHANGE', value: event.target.value });
  };
  const inputBlurHandler = () => {
    console.log('blur');
    dispatch({ type: 'BLUR' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };
  return {
    inputValue: state.value,
    hasError,
    inputValid: inputValid,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  };
};
export default useInput;
