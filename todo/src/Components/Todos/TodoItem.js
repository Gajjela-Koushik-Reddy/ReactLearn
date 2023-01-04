import './TodoItem.css';
import { useState } from 'react';

const TodoItem = (props) => {
	const [ todoAppearance, setTodoAppearance ] = useState(true);
	const removeTodo = () => {
		setTodoAppearance(false);
	};

    if(!todoAppearance){
        return;
    }

	return (
		<div className="todo-center arrange-elements">
			<div className="center-text">{props.todo}</div>
			<div className="button-style__parent">
				<button className="button-style">Edit</button>
				<button className="button-style" onClick={removeTodo}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
