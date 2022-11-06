import { useState, React, useEffect } from 'react';

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(res => res.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>코인덜 {loading ? '' : `(${coins.length})`}</h1>
      {loading ? <strong>로딩중!</strong> : null}
      <select>
        {coins.map(coin => (
          <option>
            {coin.name} ({coin.system}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </>
  );
};

export default CoinTracker;
