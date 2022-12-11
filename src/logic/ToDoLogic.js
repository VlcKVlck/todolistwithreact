import {useEffect, useState} from "react";

export default function ToDoLogic() {

    // const appTitle = 'todos';
    const placeHolder = 'What needs to be done?';
    const [toDoList, setToDoList] = useState([]);
    const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);
    useEffect(() => {
        const uncompleted = toDoList.filter(todo => todo.completed === false);
        setNoneCompletedItemsCount(uncompleted.length);
        console.log(uncompleted, 'uncompleted')
    }, [toDoList])

    const addToDo = (taskName) => {
        if (!taskName) return;
        setToDoList(toDoList.concat([{id: Date.now(), task: taskName, completed: false, editing: false}]));
        console.log('added task')
    }

    const removeTodo = (toDoToRemoveID) => {
        setToDoList(toDoList.filter(todo => todo.id != toDoToRemoveID));
    }

    const toggleCompletedTask = (taskId) => {
        toDoList.forEach(todo => {
            if (todo.id == taskId) {
                todo.completed = todo.completed != true;
            }
        })
        setToDoList(toDoList.slice());
    }

    const toggleCompletedAll = (checkBoxStatus) => {
        setToDoList(toDoList.map(todo => ({...todo, completed: checkBoxStatus})));
    }

    const clearAllCompleted = () => {
        setToDoList(toDoList.filter(todo => !todo.completed));
    }

    const editToDo = (todo, newTask) => {
        todo.task = newTask;
        setToDoList(toDoList.slice());
    }

    return {
            placeHolder,
            toDoList,
            noneCompletedItemsCount,
            addToDo,
            editToDo,
            clearAllCompleted,
            toggleCompletedAll,
            toggleCompletedTask,
            removeTodo
        }

}