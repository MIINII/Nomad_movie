// 어떤 props를 가지고 있는지 알기위해서
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ id, coverImg, title, summary, genres }) => {
  console.log('🚀 ⁝ Movie ⁝ id', id);
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
