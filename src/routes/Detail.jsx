import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

const Detail = () => {
  // url에 있는 값을 반환해주는 기본 함수(특히 변경되는 값)
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Movie coverImg={movies.medium_cover_image} title={movies.title} summary={movies.summary} genres={movies.genres} />
    </>
  );
};

export default Detail;
