import {useContext} from "react";
import {ListContext} from "../providers/list-context";

export default function ListFooter (){
    const { noneCompletedItemsCount, clearAllCompleted } = useContext(ListContext);
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{noneCompletedItemsCount}</strong> items left</span>
            <button className="clear-completed" onClick={clearAllCompleted}>Clear completed
            </button>
        </footer>
    )
}