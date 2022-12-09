
export default function List (props){
    console.log('enteredlists')
    function handleDeletion (e){
        props.removeTodoFunc (e.target.id);
    }

    function HandleComplete (e){
        props.toggleCompletedTask (e.target.id);
    }

    return (
        <ul className="todo-list">
            {props.toDoList.map(todo => (
                 <li key={todo.id} className={todo.completedStyle}>
                    <div className="view">
                        <input className="toggle"
                               id={todo.id} type="checkbox" onChange={HandleComplete}/>
                        <label>{todo.task}</label>
                        <button className="destroy" id={todo.id} onClick={handleDeletion}/>
                    </div>
                    <input className="edit"/>
                </li>
            ))}
        </ul>
    )

}
