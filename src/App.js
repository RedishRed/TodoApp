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
  // on item click func for the first parameter are the item object and second par is event...
  const onItemClick = (item, event) => {
    console.log(item);
    console.log(event);
  }   

  return <AuthContext.Provider
    value={{
      listTask: listTask,
    }}
  >
    <TodoList ListItems={listTask} onClickItem={onItemClick}/>
  </AuthContext.Provider>
}

export default App;
