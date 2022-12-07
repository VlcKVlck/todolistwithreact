
export default function List (props){
    function handleClick (e){
        props.removeTodoFunc (e.target.value);
    }

    return (
        <ul className="todo-list">
            {props.toDoList.map(todo => (
                 <li id={todo.id}>
                    <div className="view">
                        <input className="toggle"
                               type="checkbox"/>
                        <label>{todo.task}</label>
                        <button className="destroy" onClick={handleClick}/>
                    </div>
                    <input className="edit"/>
                </li>
            ))}
        </ul>
    )

}
