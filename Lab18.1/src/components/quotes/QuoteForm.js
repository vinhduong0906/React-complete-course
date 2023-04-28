import { useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import useInput from '../../hooks/use-input';
const inputValidate = (value) => value != '';
const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const {
    hasError: authorHasError,
    inputValid: authorValid,
    inputBlurHandler: authorBlurHandler,
    inputChangeHandler: authorChangeHandler,
    reset: authorReset,
  } = useInput(inputValidate);
  const {
    hasError: textHasError,
    inputValid: textValid,
    inputBlurHandler: textBlurHandler,
    inputChangeHandler: textChangeHandler,
    reset: textReset,
  } = useInput(inputValidate);
  let formValid = false;
  if (authorValid && textValid) formValid = true;
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          {authorHasError && (
            <div className={classes['error-text']}>You must enter author!</div>
          )}
          <input
            onChange={authorChangeHandler}
            onBlur={authorBlurHandler}
            type='text'
            id='author'
            ref={authorInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          {textHasError && (
            <div className={classes['error-text']}>
              You must enter some text!
            </div>
          )}
          <textarea
            onChange={textChangeHandler}
            onBlur={textBlurHandler}
            id='text'
            rows='5'
            ref={textInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type='submit' className='btn' disabled={!formValid}>
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
