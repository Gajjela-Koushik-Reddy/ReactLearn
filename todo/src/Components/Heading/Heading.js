import TodoForm from "./TodoForm";
import "./Heading.css"

const Heading = (props) => {

    const sendTodoData = (data) => {
        const newData = {...data, id:Math.random().toString()}
        props.getTodoData(newData);
    }

    return (
        <div className="Heading-center">
            <h1>ToDo</h1>
            <TodoForm getMainTodoData = {sendTodoData}/>
        </div>
    );
}

export default Heading;