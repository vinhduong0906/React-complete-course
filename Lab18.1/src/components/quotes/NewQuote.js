import useHttp from '../../hooks/use-http';
import QuoteForm from './QuoteForm';

const NewQuote = () => {
  const { isLoading, error, sendRequest: addQuoteRequest } = useHttp();
  // const addedQuote = (quote) => {
  //   console.log(quote);
  // };
  const addQuoteHandler = (author, text) => {
    const config = {
      url: process.env.REACT_APP_API_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { author: author, text: text },
    };
    addQuoteRequest(config, () => {});
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
