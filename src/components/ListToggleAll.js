import List from './List'
import {useContext} from "react";
import {ListContext} from "../providers/list-context";


export default function ListToggleAll ({children}){
    const { toggleCompletedAll} = useContext(ListContext);
    function HandleToggleCompletedAll(e){
        toggleCompletedAll (e.target.checked);
    }

    return (
        <section className="main">
            <input className="toggle-all"
                   type="checkbox"
            onChange={HandleToggleCompletedAll}/>
            {children}
        </section>

    )
}