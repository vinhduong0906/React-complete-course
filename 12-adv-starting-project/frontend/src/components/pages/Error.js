import { useRouteError } from 'react-router-dom';
import PageContent from './PageContent';
import MainNavigation from '../MainNavigation';
export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div id='error-page'>
      <MainNavigation />
      <PageContent>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.data}</i>
        </p>
      </PageContent>
    </div>
  );
}
