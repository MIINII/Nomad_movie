import { useState } from 'react';
import './App.css';
import GalConverter from './prac/GalConverter';

import Todo from './prac/Todo';
import CoinTracker from './prac/CoinTracker';
import Movie from './prac/Movie';

function App() {
  return (
    <div className='App'>
      {/* <Todo /> */}
      {/* <CoinTracker /> */}
      <Movie />
    </div>
  );
}

export default App;
