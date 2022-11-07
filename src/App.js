import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Movie from './components/Movie';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
