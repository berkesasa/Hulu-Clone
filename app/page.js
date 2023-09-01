import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import requests from './utils/requests';


export default async function Page({ searchParams }) {
  const API_KEY = process.env.API_KEY;

  const getUrl = requests[searchParams.genre]  != null ? requests[searchParams.genre].url : `/trending/all/week?api_key=${API_KEY}&language=en-US`;

  const request = await fetch(`https://api.themoviedb.org/3${getUrl}`
  ).then((res) => res.json());

  return (
    <div>

      <Header />

      <Nav />

      <Results request={request} />

    </div>
  )
}

