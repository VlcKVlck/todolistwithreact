
export default function List (props){
    console.log('enteredlists')
    function handleDeletion (e){
        props.removeTodoFunc (e.target.id);
    }

    function HandleComplete (e){
        props.toggleCompletedTask (e.target.id);
        // (e.target.checked) ? e.target.checked=false : e.target.checked=true;
    }

    function handleDoubleClick (e){
        // e.target.classList+='editing';
        console.log(e);
    }

    return (
        <ul className="todo-list">
            {props.toDoList.map(todo => (
                 <li key={todo.id} className={(todo.completed==true)? "completed" : ''} onDoubleClick={handleDoubleClick}>
                    <div className="view">
                        <input className="toggle"
                               id={todo.id} type="checkbox" onChange={HandleComplete} checked={(todo.completed==true)? true : false}/>
                        <label onDoubleClick={handleDoubleClick}>{todo.task}</label>
                        <button className="destroy" id={todo.id} onClick={handleDeletion} onDoubleClick={handleDoubleClick}/>
                    </div>
                    <input className="edit"/>
                </li>
            ))}
        </ul>
    )

}
