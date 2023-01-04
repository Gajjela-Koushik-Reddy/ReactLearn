import TodoItem from './TodoItem';
import Card from '../UI/Card';

const TodoList = (props) => {
	return (
		<Card>
			{props.todos.map((element) => <TodoItem key={element.id} todo={element.todo} />)}
		</Card> 
	);
};

export default TodoList;
