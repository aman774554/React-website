import React from 'react';
import TodoList from './TodoList';
import TodoNav from './TodoNav';
import ThemeContextProvider from '../contexts/ThemeContext';
import AuthContextProvider from '../contexts/AuthContext';
import TodoListContextProvider from '../contexts/TodoListContext';

const Todo = () => {
	return(
		<div>

<div className="container p-3 my-3 border card ">
				<h3>Todo</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>

    <div className="ui raised very padded text container segment tolist">
					<AuthContextProvider>
					<TodoListContextProvider>
					<ThemeContextProvider>

    				<TodoNav />
            <TodoList />

						</ThemeContextProvider>
						</TodoListContextProvider>
						</AuthContextProvider>
    </div>


		</div>
	)
}

export default Todo;
