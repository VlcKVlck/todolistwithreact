import List from './List'


export default function Main (props){
    console.log("entered main")
    function HandleToggleCompletedAll(e){
        props.toggleCompletedAll (e.target.checked);
    }

    return (
        <section className="main">
            <input className="toggle-all"
                   type="checkbox"
            onChange={HandleToggleCompletedAll}/>
            {/*{props.children}*/}
            <List toDoList = {props.toDoList} removeTodoFunc={props.removeTodo} toggleCompletedTask={props.toggleCompletedTask}/>
        </section>

    )
}