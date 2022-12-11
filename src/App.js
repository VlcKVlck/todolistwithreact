import './App.css';

import ToDoList from './components/ToDoList'
import {useRef, useState} from "react";


function App() {
    const [namesOfApps, setNamesOfApps] = useState([{id: Date (), name: 'todos'}])
    const inputRef = useRef(null);

    function handleTaskInput(event) {
        setNamesOfApps (namesOfApps.concat ([{id: Date(), name: inputRef.current.value}]))
        inputRef.current.value =''
    }

    return(
        <>
            <input type='text' ref={inputRef} onKeyUp={(event) => event.key==='Enter' && handleTaskInput(event)}/>
            <button type="submit" id='submitnewname' onClick={handleTaskInput}>Add name</button>
            {namesOfApps.map(item => <ToDoList appName={item.name} />)}
        </>
        )
}

export default App;
