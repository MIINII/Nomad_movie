import { useState } from 'react';
import './App.css';
import GalConverter from './components/GalConverter';
import TimeConverter from './components/TimeConverter';

function App() {
  const [nowConverter, setNowConverter] = useState('');
  const [index, setIndex] = useState('x');
  const onSelect = e => {
    setIndex(e.target.value);
  };

  return (
    <div className='App'>
      <h1>컨버트ㅓ</h1>
      <select value={index} onChange={onSelect}>
        <option value='x'>어떤걸 변환하실건지..?</option>
        <option value='0'>시간 </option>
        <option value='1'>Gal</option>
      </select>
      <hr />
      {index === 'x' ? '선택하쇼' : null}
      {index === '0' ? <TimeConverter /> : null}
      {index === '1' ? <GalConverter /> : null}
    </div>
  );
}

export default App;
