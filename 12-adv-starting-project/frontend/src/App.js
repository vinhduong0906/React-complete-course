// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// OK
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import HomePage from './components/pages/Home';
import EventsPage, { loader as eventLoader } from './components/pages/Events';
import EventDetailPage, {
  loader as eventDetailLoader,
} from './components/pages/EventDetail';
import EditEventPage from './components/pages/EditEvent';
import NewEventPage from './components/pages/NewEvent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import EventRoot from './routes/event-root';
import ErrorPage from './components/pages/Error';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: 'events',
          element: <EventRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventLoader,
            },
            {
              path: ':eventId',
              element: <EventDetailPage />,
              loader: eventDetailLoader,
            },
            {
              path: 'new',
              element: <NewEventPage />,
            },
            {
              path: ':eventId/edit',
              element: <EditEventPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
