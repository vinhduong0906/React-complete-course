import Quotes from './components/quotes/Quotes';
import QuoteDetail from './components/quotes/QuoteDetail';
import NewQuote from './components/quotes/NewQuote';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: '/quotes',
      element: <Quotes />,
    },
    {
      path: '/',
      element: <Navigate to='/quotes' />,
    },
    {
      path: '/quotes/:quoteId',
      element: <QuoteDetail />,
    },
    {
      path: '/new-quote',
      element: <NewQuote />,
    },
    ,
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
