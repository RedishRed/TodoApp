import './App.css';
import { useState } from 'react';
import AuthContext from './task/auth-context';
import TodoList from './components/List/TodoList';

//task items... 
const taskItems = [
  {
    taskName:'Code React Application',
    detail:'create a react application from scratch',
    isDone:false        
  }
];

function App() {
  // useState for list of task... 
  const [listTask, setListTask] = useState(taskItems); 
  // item useState for storing user inputs...
  const [item, setItem] = useState({
    taskName:'',
    detail:'',
    isDone:false
  });
  // on item click func for the first parameter are the item object and second par is event...
  const onItemClick = (item, event) => {
    console.log(item);
    console.log(event);
  }   
  // fetch user input...
  const onChangeHandler = e => {
    const {name, value} = e.target;
    setItem(prevValue => {
      return {... prevValue, [name]:value}
    }) 
  };
  // reset function 
  const resetHandler = () => {
      setItem({
        taskName:'',
        detail:'',
        isDone:false
      })
  };
  // add function 
  const addTaskHandler = () => {
    setListTask([item, ...listTask])
  };
  // delete function
  const deleteTaskHandler = (id) => {
    listTask.splice(id, 1);
  }

  return <AuthContext.Provider
    value={{
        item: item, 
        onChange: onChangeHandler,
        onReset: resetHandler,
        onAdd: addTaskHandler,
        listTask: listTask,
        onDelete: deleteTaskHandler,
        setItem: setItem
    }}
  >
    <TodoList ListItems={listTask} onClickItem={onItemClick}/>
  </AuthContext.Provider>
}

export default App;
