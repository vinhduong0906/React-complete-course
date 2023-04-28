import EventsList from '../../components/EventsList';
import { useLoaderData, json } from 'react-router-dom';
function EventsPage() {
  const events = useLoaderData().events;
  // const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}
export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'No event found!' }, { status: 500 });
  } else {
    return response;
  }
};
export default EventsPage;
