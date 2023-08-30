import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import requests from './utils/requests';


export default async function Page({ searchParams }) {
  const API_KEY = process.env.API_KEY;


  //  const request = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}`, {next: { revalidate: 10000}})
  // const genre = searchParams.get('genre');
  // const url = requests[genre].url


  const getUrl = requests[searchParams.genre]  != null ? requests[searchParams.genre].url : `/trending/all/week?api_key=${API_KEY}&language=en-US`;


  // const getUrl = requests[searchParams.genre].url


  const request = await fetch(`https://api.themoviedb.org/3${getUrl}`
  ).then((res) => res.json());

  return (
    <div>

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results request={request} />
      {/* {
        request?.results?.map((dt, i) => (
          <Results key={i} dt={dt} />
        ))
      } */}

    </div>
  )
}

