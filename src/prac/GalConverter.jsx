import React from 'react';
import { useState } from 'react';

const GalConverter = () => {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);

  const onChange = e => {
    setAmount(e.target.value);
  };

  const reset = () => {
    setAmount(0);
  };

  const onFlip = () => {
    reset();
    setInverted(inverted => !inverted);
  };

  return (
    <div>
      <div>
        <input value={inverted ? amount : Math.round(amount / 60)} id='hour' type='number' placeholder='시' onChange={onChange} disabled={!inverted} />
        <label htmlFor='hour'>km</label>
      </div>

      <div>
        <input value={inverted ? amount * 60 : amount} id='minutes' type='number' placeholder='분' onChange={onChange} disabled={inverted} />
        <label htmlFor='hour'>Miles</label>
      </div>

      <button onClick={reset}>리셋</button>
      <button onClick={onFlip}>{inverted ? '돌아가' : '바꿔~'}</button>
    </div>
  );
};

export default GalConverter;
