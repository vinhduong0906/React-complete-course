import useHttp from '../../hooks/use-http';
import QuoteForm from './QuoteForm';

import { addQuote, sortQuotes } from '../../store/quotesSlice'
import { useDispatch } from 'react-redux';
const NewQuote = () => {
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest: addQuoteRequest } = useHttp();
  const addedQuote = (data, quote) => {
    if (quote) {
      const addedQuote = { id: quote.name, author: data.author, text: data.text }
      dispatch(addQuote(addedQuote))
      dispatch(sortQuotes())
    }
  };
  const addQuoteHandler = (author, text) => {

    const config = {
      url: process.env.REACT_APP_API_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { author: author, text: text },
    };
    addQuoteRequest(config, addedQuote.bind(null, { author, text }));
    addedQuote();
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
