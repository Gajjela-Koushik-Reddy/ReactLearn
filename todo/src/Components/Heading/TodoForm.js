import { useState } from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
    const [todo, setTodo] = useState('');

    const inputHandler = (event) => {
        setTodo(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // set data backwards to App.js now
        // Make data first

        const newTodo = {
            todo: todo
        };

        props.getMainTodoData(newTodo);
        setTodo('');
    }

	return (
		<form className='todoform-style' onSubmit={submitHandler}>
			<input value={todo} type="text" className='todoform-style__input' onChange={inputHandler}/>
			<button type='submit' className="todoform-button-style">add</button>
		</form>)
};

export default TodoForm;
