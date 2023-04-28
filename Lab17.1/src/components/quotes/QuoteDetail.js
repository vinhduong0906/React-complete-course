import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <div>{params.quoteId}</div>
    </Fragment>
  );
};
export default QuoteDetail;
