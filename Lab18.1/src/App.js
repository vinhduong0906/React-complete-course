import Quotes from './components/quotes/Quotes';
import QuoteDetail from './components/quotes/QuoteDetail';
import NewQuote from './components/quotes/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './components/NotFound';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
function App() {
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
        { path: '*', element: <NotFound /> },
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
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
