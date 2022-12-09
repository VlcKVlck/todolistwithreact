import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import List from './components/List'
import {useEffect, useState} from "react";


function App() {
    const appTitle = 'todos';
    const placeHolder = 'What needs to be done?';
    const [ toDoList, setToDoList ] = useState([]);
    const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);
    console.log('entered app', "todolist;", toDoList)


    useEffect(() => {
      const uncompleted = toDoList.filter( todo => todo.completed==false );
      setNoneCompletedItemsCount(uncompleted.length);
      console.log(uncompleted, 'uncompleted')
  }, [toDoList])

    const addToDo =(taskName)=>{
        if (!taskName) return;
        setToDoList (toDoList.concat( [{id: Date.now(), task: taskName, completed: false, completedStyle:""}]));
        console.log('added task')
        // console.log(toDoList, "after adding")
    }

    const removeTodo = (toDoToRemoveID) => {
        // console.log(toDoToRemoveID)
        setToDoList (toDoList.filter(todo => todo.id !=toDoToRemoveID));
    }

    const toggleCompletedTask = (taskId) =>{
        toDoList.forEach(todo=>{
          if (todo.id ==taskId) {
            console.log('vicky2', toDoList);
            todo.completed = todo.completed !== true;
        }})
        setToDoList(toDoList.slice());
}


    const toggleCompletedAll = (checkBoxStatus) =>{
        setToDoList (toDoList.map( todo => ({ ...todo, completed: checkBoxStatus, completedStyle: (checkBoxStatus ===true) ? "completed" : "" })));
    }

    const clearAllCompleted = ()=>{
        setToDoList (toDoList.filter(todo => !todo.completed));
    }

    const changeTaskFromListOnDoubleClick =(e)=>{

    }


  return (
  <section className="todoapp">
      <Header title ={appTitle} placeholder={placeHolder} addToDo = {addToDo}/>
      <Main toDoList = {toDoList} toggleCompletedAll={toggleCompletedAll} removeTodo={removeTodo} toggleCompletedTask={toggleCompletedTask}>
        <List removeTodoFunc={removeTodo} toggleCompletedTask={toggleCompletedTask} changeTaskFromListOnDoubleClick={changeTaskFromListOnDoubleClick} toDoList = {toDoList} />
      </Main>
      <Footer clearAllCompleted={clearAllCompleted} openTasks={noneCompletedItemsCount} />
  </section>
  );
}

export default App;
