import { useState } from 'react';
import './App.css';
import GalConverter from './prac/GalConverter';

import Todo from './prac/Todo';
import CoinTracker from './prac/CoinTracker';

function App() {
  return (
    <div className='App'>
      {/* <Todo /> */}
      <CoinTracker />
    </div>
  );
}

export default App;
