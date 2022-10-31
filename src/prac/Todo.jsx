import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (todo === '') {
      return;
    }
    setTodos(currentArr => [todo, ...currentArr]);
    setTodo('');
  };

  return (
    <>
      <h1>내할일({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type='text' placeholder='쓰쇼' />
        <button>추가하쇼</button>
      </form>
    </>
  );
};

export default Todo;
