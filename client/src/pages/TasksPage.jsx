import { useEffect,useState } from "react";
import React from 'react'
import {getTasksRequest} from "../api/tasks.api.js";
import TaskCard from "../components/TaskCard.jsx";

import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskPage() {
 
    //const [tasks,setTasks] = useState([])

    const {tasks,loadTask} = useContext(TaskContext);
    //console.log(tasks);

    useEffect(() => {
      loadTask();
      /*
      async function loadTask(){
        const response = await getTasksRequest()
        setTasks(response.data)
        console.log(response.data);
      }
      loadTask()
      console.log('taskpage');
      */
    }, [])

    function renderMain(){
      if(tasks.length === 0) return <h1>No tasks yet</h1>;
      return tasks.map(task=>(<TaskCard task={task} key={task.id}/>));
    }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-2 text-white py-4">
        {renderMain()}
      </div>
    </div>
  )
}

export default TaskPage