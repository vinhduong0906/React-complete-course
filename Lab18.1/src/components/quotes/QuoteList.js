import { Fragment, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../store/store';
import { reverseQuotes } from '../../store/quotesSlice';
const QuoteList = (props) => {
  const dispatch = useDispatch();
  const quotes = useSelector(state => state.quotes)
  const navigate = useNavigate();
  const [sortAscending, setSortAscending] = useState(false);
  const [sort, setSort] = useSearchParams({});
  const sortHandler = () => {
    // navigate(`/quotes?sort=${sortAscending ? 'asc' : 'desc'}`);
    setSortAscending((preState) => !preState);
    setSort({ sort: sortAscending ? 'asc' : 'desc' })
    dispatch(reverseQuotes())
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>
          Sort {sortAscending ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
