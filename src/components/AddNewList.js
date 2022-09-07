import React, {useState} from 'react';
const AddNewList = ({ addTodo }) => {
  const [todos, setTodos] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(todos);
    addTodo(todos);
    setTodos('');
  };
  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor='todo'>To do</label>
      <input type='text' value={todos} id='todo' onChange={(e) => setTodos(e.target.value)} />
      <input type='submit'/>
    </form>
  );


};

export default AddNewList;
