import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import requests from './utils/requests';


export default async function Page({ searchParams }) {

  //  const request = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}`, {next: { revalidate: 10000}})
  // const genre = searchParams.get('genre');
  // const url = requests[genre].url

  const getUrl = requests[searchParams.genre]


  const request = await fetch(`https://api.themoviedb.org/3${getUrl.url}`
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

