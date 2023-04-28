import { Fragment } from 'react';
import { useParams, useLoaderData, json } from 'react-router-dom';
import EventItem from '../EventItem';
const EventDetailPage = () => {
  const params = useParams();
  const event = useLoaderData().event;
  console.log(event);
  return (
    <Fragment>
      <EventItem event={event} />
    </Fragment>
  );
};
export const loader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    return json({ message: 'No event detail found!' }, { status: 500 });
  } else {
    return response;
  }
};
export default EventDetailPage;
