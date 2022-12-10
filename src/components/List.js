import {useState} from "react";

export default function List (props){
    const [editFlag, setEditFlag] = useState(false)

    function handleDeletion (e){
        props.removeTodoFunc (e.target.id);
    }
    function handleDoubleClick (){
        setEditFlag(!editFlag)
    }

    function HandleComplete (e){
        props.toggleCompletedTask (e.target.id);
    }


    return (
        <ul className="todo-list" >
            {props.toDoList.map(todo => (
                 <li key={todo.id}  className= {(todo.completed ? "completed" : '') + (editFlag ? 'editing' : '')}>
                    <div className="view" >
                        <input className="toggle"
                               id={todo.id} type="checkbox" onChange={HandleComplete} checked={(todo.completed==true)? true : false} />
                        <label onDoubleClick={handleDoubleClick}>{todo.task}</label>
                        <button className="destroy" id={todo.id} onClick={handleDeletion} />
                    </div>
                    <input className="edit"
                        value = {todo.task}
                        onChange={(e) => props.editToDo (todo,e.target.value)}
                        onKeyUp={(e)=>e.key==='Enter' && handleDoubleClick()}/>
                </li>
            ))}
        </ul>
    )
}
