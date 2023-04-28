import { Fragment, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
const QuoteList = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [sortAscending, setSortAscending] = useState(true);
  const sortHandler = () => {
    navigate(`/quotes?sort=${sortAscending ? 'asc' : 'desc'}`);
    setSortAscending((preState) => !preState);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>
          Sort {sortAscending ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
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
