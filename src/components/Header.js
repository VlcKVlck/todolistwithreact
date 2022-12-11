import {useContext} from "react";
import {ListContext} from "../providers/list-context";

export default function Header({appName}){
    const { placeholder, addToDo } = useContext(ListContext);
    function handleClick (e){
        if (e.key === "Enter"){
            addToDo (e.target.value);
            e.target.value ='';
        }
    }
    return (
        <header className="header">
            <h1>{appName}</h1>
            <input className="new-todo"
                   placeholder={placeholder}
                   onKeyDown={handleClick}
                   autoFocus/>
        </header>
    )

}