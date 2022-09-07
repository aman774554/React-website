import React, {useState, useEffect} from 'react';
import AddNewList from './AddNewList';
const List = () => {
  const [todos, setTodos] = useState([
    {text: 'pay bills', id:1},
    {text: 'Homework', id:2},
    {text: 'Dinner', id:3}
  ]);

  const [count, setCount] = useState(0);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {text: text, id: Math.random()}
    ]);
  };

  useEffect(() => {
    console.log('use effect', todos)
  }, [todos]);

  useEffect(() => {
    console.log('use effect', count)
  }, [count]);

  return (
            <div>
              <ul>
                {todos.map((todo) =>{
                  return (
                    <li key={todo.id}>{todo.text}</li>
                  )
                })}
              </ul>
              {/*<button onClick={addTodo}>Add a todo</button>*/}
              <AddNewList addTodo={addTodo} />
              <button onClick={() => setCount(count + 1)}>Score: {count} </button>
            </div>
        )

};

export default List;
