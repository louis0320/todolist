function Todo(props) {
    return (
        <div className="todo" key={props.todo.id}> 
            <label 
            className = {props.todo.completed ? "completed" : null} 
            onClick={props.handleClick}>
                {props.todo.todoName}
            </label>
            <label className="xBtn" onClick={props.handleDelete}>
                ❌
            </label>
        </div>
    )
}

export default Todo;