import classes from './QuoteDetail.module.css';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const QuoteDetail = () => {
  const params = useParams();
  const quotes = useSelector(state => state.quotes)
  const quoteIndex = quotes.findIndex((quote) => quote.id === params.quoteId)

  return (
    <div className={classes.item}>
      <div className={classes.author}>{quotes[quoteIndex].author}</div>
      <div className={classes.text} >{quotes[quoteIndex].text}</div>
    </div >
  );
};
export default QuoteDetail;
