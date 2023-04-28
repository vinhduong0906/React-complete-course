import QuoteList from './QuoteList';
import { Fragment } from 'react';
const Quotes = (props) => {
  return (
    <Fragment>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={props.quotes} />;
    </Fragment>
  );
};
export default Quotes;
