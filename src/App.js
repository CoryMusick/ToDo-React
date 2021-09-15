import { useState } from 'react';
import uniqid from "uniqid";
import Overview from "./components/Overview"

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({text: "", id: uniqid(), placement: tasks.length + 1},);


  const handleChange = (e) => {
    e.preventDefault();
    setTask({text: e.target.value, id: task.id, placement: task.placement})
  }

  const onSubmitTask = (e) =>  {
    e.preventDefault();
    const newTaskArray = tasks.concat(task);
    setTasks(newTaskArray);
    setTask({text: "", id: uniqid(), placement: newTaskArray.length + 1});
  } 

  const reformatPlacement = (taskArray) => {
    for(let i = 0; i < taskArray.length; i++){
      taskArray[i].placement = i + 1;
    }
    return taskArray;
  }

  const removeTask = (e) =>{
    e.preventDefault();
    const removeTargetId = e.target.id
    let newTaskList = tasks.filter((task) => {
      return task.id !== removeTargetId;
    })
    newTaskList = reformatPlacement(newTaskList);
    
    setTasks(newTaskList)
    setTask({text: "", id: uniqid(), placement: newTaskList.length + 1})

  } 

  return (
    <div>
      <form style={{display: "flex", flexDirection: "column", width: "50%", margin: "0 auto"}}>
        <label htmlFor="taskInput">Enter Task</label>
        <input onChange={(e) => handleChange(e)} value={task.text} type="text" id="taskInput" />
        <button onClick={(e) => onSubmitTask(e)} type="submit">
          Add Task
        </button>
      </form>
      <Overview tasks={tasks} removeTask={(e) => removeTask(e)}/>
    </div>
  );
}

export default App;
