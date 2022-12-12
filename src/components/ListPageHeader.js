import {useContext, useRef, useState} from "react";
import ListComponents from "./ListComponents";
import './ListPageHeader.css'
import {AuthContext} from "../providers/auth-context";

export function ListPageHeader(){
    const inputRef = useRef(null);
    const [namesOfApps, setNamesOfApps] = useState([{id: Date (), name: 'todos'}])
    const {currentUser} = useContext(AuthContext);

    function handleTaskInput(event) {
        inputRef.current.value && setNamesOfApps(namesOfApps.concat([{id: Date(), name: inputRef.current.value}]));
        inputRef.current.value = '';
    }

    return (
        <>
            {(currentUser) ? (
            <h1>My Todo Lists </h1>
            <div className='inputform'>
                <input type='text' ref={inputRef} onKeyUp={(event) => event.key==='Enter' && handleTaskInput(event)}/>
                <button type="submit" id='submitnewname' onClick={handleTaskInput}>Add new list</button>
                {namesOfApps.map(item => <ListComponents appName={item.name} />)}

            </div>):
                (


                )}
        </>


    )
}