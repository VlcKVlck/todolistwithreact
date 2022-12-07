import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
    const appTitle = 'To Do';
    let toDoList =[];

    const addToDo =(taskName)=>{
        toDoList.concat(toDoList, [{id: Date.now(), task: taskName, completed: false}]);
    }

    const removeTodo = (toDoToRemove) => {
        toDoList = toDoList.filter(todo => todo.id !==toDoToRemove.id);

    }

    const toggleCompletedTask = (taskToToggleCompleted) =>{
        toDoList.forEach(function (todo){
            if (todo.id ===taskToToggleCompleted.id){
                (todo.completed ===true) ? todo.completed=false : todo.completed =true;
            }
        })
    }

    const toggleCompletedAll = (checkBoxStatus) =>{
        toDoList = toDoList.map( todo => ({ ...todo, completed: checkBoxStatus }));
    }

    const clearAllCompleted = ()=>{
        toDoList = toDoList.filter(todo => !todo.completed)
    }


  return (
  <section className="todoapp">
      <Header />
      <Main />
      <Footer />
  </section>


  );
}

export default App;
