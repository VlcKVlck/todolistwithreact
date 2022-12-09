
export default function List (props){
    console.log('enteredlists')
    function handleDeletion (e){
        props.removeTodoFunc (e.target.id);
    }

    function HandleComplete (e){
        props.toggleCompletedTask (e.target.id);
    }

    function handleDoubleClick (e){
        // e.target.className='editing';
        console.log(e);
    }
//
    return (
        <ul className="todo-list" >
            {props.toDoList.map(todo => (
                 <li key={todo.id}  className= {todo.completed? "completed" : ''}>
                    <div className="view" >
                        <input className="toggle"
                               id={todo.id} type="checkbox" onChange={HandleComplete} checked={todo.completed ? true : false} />
                        <label>{todo.task}</label>
                        <button className="destroy" id={todo.id} onClick={handleDeletion} />
                    </div>
                    <input className="edit"/>
                </li>
            ))}
        </ul>
    )

}
