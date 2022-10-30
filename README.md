# REACT 기초

---

# `useState()`

`const [state, function] = useState()`

```jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState();
  const onClick = () => {
    // State를 설정하는 방법
    // 01 직접 값을 설정 : setCounter(counter + 1);
    // 02 함수를 전달하기 : setCounter(current => current + 1)
    setCounter(counter => counter + 1);
  };
  return (
    <div className='App'>
      <h3>TotalClick = {counter}</h3>
      <button onClick={onClick}>클릭메</button>
    </div>
  );
}

export default App;
```
