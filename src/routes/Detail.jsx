import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

const Detail = () => {
  // url에 있는 값을 반환해주는 기본 함수(특히 변경되는 값)
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log('🚀 ⁝ getMovie ⁝ json', json);
    setMovies(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <>
      <h1>무비 {loading ? '' : `(${movies.length})`}</h1>
      {loading ? (
        <strong>로딩중!</strong>
      ) : (
        <div>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Detail;
