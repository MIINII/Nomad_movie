import { useState, useEffect } from 'react';

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
      .then(res => res.json())
      .then(json => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movies);

  return (
    <>
      <h1>무비 {loading ? '' : `(${movies.length})`}</h1>
      {loading ? <strong>로딩중!</strong> : null}
      <ul>
        {movies.map(movie => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt='포스터' />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Movie;
