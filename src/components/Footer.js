
export default function Footer (props){
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{props.openTasks}</strong> items left</span>
            <button className="clear-completed" onClick={props.clearAllCompleted}>Clear completed
            </button>
        </footer>
    )
}