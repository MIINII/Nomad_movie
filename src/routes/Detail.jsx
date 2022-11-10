import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Movie from '../components/Movie';

const Detail = () => {
  // url에 있는 값을 반환해주는 기본 함수(특히 변경되는 값)
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovies(json.data.movie);
    setLoading(false);
  }, []);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <>
      <h1>{movies.title}</h1>
      <div>
        <Movie
          key={movies.id}
          id={movies.id}
          coverImg={movies.medium_cover_image}
          summary={movies.summary}
          genres={movies.genres}
        />
      </div>
    </>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Detail;
