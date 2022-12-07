import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {useState} from "react";


function App() {
    const appTitle = 'todos';
    const placeHolder = 'What needs to be done?';
    const [ toDoList, setToDoList ] = useState([]);



    const addToDo =(taskName)=>{
        setToDoList (toDoList.concat( [{id: Date.now(), task: taskName, completed: false}]));
        console.log(toDoList)

    }

    const removeTodo = (toDoToRemove) => {
        setToDoList (toDoList.filter(todo => todo.id !==toDoToRemove.id));

    }

    const toggleCompletedTask = (taskToToggleCompleted) =>{
         (toDoList.forEach(function (todo){
            if (todo.id ===taskToToggleCompleted.id){
                (todo.completed ===true) ? todo.completed=false : todo.completed =true;
            }
        }))
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
      <Main removeTodoFunc={removeTodo} toDoList = {toDoList} toggleCompletedAll={toggleCompletedAll} />
      <Footer clearAllCompleted={clearAllCompleted} />
  </section>


  );
}

export default App;
