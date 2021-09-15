import React from "react";

const Overview = ({tasks, removeTask }) => {
  if(tasks){
     return (
      <ul>
        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <li>{task.placement}: {task.text}</li>
              <button id={task.id}  onClick={(removeTask)}>
                Remove Task  
              </button>
            </div> 
          )
        })}
      </ul>
    ); 
  }else{
    return null
  }
};

export default Overview;
