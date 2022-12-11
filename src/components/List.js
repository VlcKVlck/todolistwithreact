import {useContext, useState} from "react";
import {ListContext} from "../providers/list-context";

export default function List (){
    const { toggleCompletedTask , removeTodoFunc , toDoList, editToDo} = useContext(ListContext);

    const [editFlag, setEditFlag] = useState(false)

    function handleDeletion (e){
        removeTodoFunc (e.target.id);
    }
    function handleDoubleClick (){
        setEditFlag(!editFlag)
    }

    function HandleComplete (e){
        toggleCompletedTask (e.target.id);
    }


    return (
        <ul className="todo-list" >
            {toDoList.map(todo => (
                 <li key={todo.id}  className= {(todo.completed ? "completed" : '') + (editFlag ? 'editing' : '')}>
                    <div className="view" >
                        <input className="toggle"
                               id={todo.id} type="checkbox" onChange={HandleComplete} checked={(todo.completed==true)? true : false} />
                        <label onDoubleClick={handleDoubleClick}>{todo.task}</label>
                        <button className="destroy" id={todo.id} onClick={handleDeletion} />
                    </div>
                    <input className="edit"
                        value = {todo.task}
                        onChange={(e) => editToDo (todo,e.target.value)}
                        onKeyUp={(e)=>e.key==='Enter' && handleDoubleClick()}/>
                </li>

            ))}
        </ul>
    )
}
