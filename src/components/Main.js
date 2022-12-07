import List from './List'



export default function Main (props){
    function HandleChangeEvent(e){
        props.toggleCompletedAll (e.target.checked);
    }

    return (
        <section className="main">
            <input className="toggle-all"
                   type="checkbox"
            onChange={HandleChangeEvent}/>
            <List removeTodoFunc={props.removeTodoFunc} toDoList={props.toDoList}/>
        </section>

    )
}