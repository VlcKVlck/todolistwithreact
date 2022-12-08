import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {useEffect, useState} from "react";


function App() {
    const appTitle = 'todos';
    const placeHolder = 'What needs to be done?';
    const [ toDoList, setToDoList ] = useState([]);
    const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);
    console.log('vick')

    useEffect(() => {
      const uncompleted = toDoList.filter( todo => todo.completed==false );
      setNoneCompletedItemsCount(uncompleted.length);
      console.log(uncompleted)
  }, [toDoList])

    const addToDo =(taskName)=>{
        if (!taskName) return;
        setToDoList (toDoList.concat( [{id: Date.now(), task: taskName, completed: false}]));
    }

    const removeTodo = (toDoToRemoveID) => {
        console.log(toDoToRemoveID)
        setToDoList (toDoList.filter(todo => todo.id !=toDoToRemoveID));
    }

    const toggleCompletedTask = (taskId) =>{
        toDoList.forEach(todo => {
            if (todo.id ==taskId) {
                (todo.completed === true) ? todo.completed = false : todo.completed = true;

            }})
        setToDoList(toDoList);
    }

    const toggleCompletedAll = (checkBoxStatus) =>{
        setToDoList (toDoList.map( todo => ({ ...todo, completed: checkBoxStatus })));
    }

    const clearAllCompleted = ()=>{
        setToDoList (toDoList.filter(todo => !todo.completed));
    }




  return (
  <section className="todoapp">
      <Header title ={appTitle} placeholder={placeHolder} funcForAddingATask = {addToDo}/>
      <Main toggleCompletedTask={toggleCompletedTask} removeTodoFunc={removeTodo} toDoList = {toDoList} toggleCompletedAll={toggleCompletedAll} />
      <Footer clearAllCompleted={clearAllCompleted} openTasks={noneCompletedItemsCount} />
  </section>


  );
}

export default App;
