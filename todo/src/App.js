import { useState } from 'react';
import Heading from './Components/Heading/Heading';
import TodoList from './Components/Todos/TodoList';

const Todos = [];

const App = () => {
	const [ todos, addTodos ] = useState(Todos);
	const addTodoData = (data) => {
		addTodos([data, ...todos]);
	};

	return (
		<div>
			<Heading getTodoData={addTodoData} />
			<TodoList todos={todos} />
		</div>
	);
};

export default App;
