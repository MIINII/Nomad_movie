import { useState, useEffect } from 'react';

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

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
      <h1>코인덜 {loading ? '' : `(${movies.length})`}</h1>
      {loading ? <strong>로딩중!</strong> : null}
      <ul>
        {movies.map(movie => (
          <img src={movie.background_image} alt='포스타' sizes='(min-width:300px) 10vw' />
        ))}
      </ul>
    </>
  );
};

export default Movie;
