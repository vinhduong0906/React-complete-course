import Quotes from './components/quotes/Quotes';
import QuoteDetail from './components/quotes/QuoteDetail';
import NewQuote from './components/quotes/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './components/NotFound';
import useHttp from './hooks/use-http';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useParams,
  useSearchParams
} from 'react-router-dom';
import store from './store/store'
import { initQuotes, sortQuotes } from './store/quotesSlice'
function App() {
  const dispatch = useDispatch();
  const [quotes, setQuotes] = useState([])
  const { isLoading,
    error,
    sendRequest: getQuoteRequest } = useHttp();
  const config = {
    url: process.env.REACT_APP_API_URL,

  };
  const initState = (quotes) => {

    dispatch(initQuotes(quotes))
    dispatch(sortQuotes())
  }
  useEffect(() => {
    const getQuotes = (data) => {
      for (const key in data) {
        const quote = { ...data[key], 'id': key }
        setQuotes(quotes => [...quotes, quote])
      }
    }
    getQuoteRequest(config, getQuotes);
    // setQuotes(quotes => [...quotes].sort())

  }, [])
  // 
  useEffect(() => { initState(quotes) }, [quotes])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to='/quotes' />,
    },
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/quotes',
          element: <Quotes />,
        },
        {
          path: '/quotes/:quoteId',
          element: <QuoteDetail />,
        },
        {
          path: 'new-quote',
          element: <NewQuote />,
        },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);
  console.log(store)
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
