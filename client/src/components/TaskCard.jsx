import {deleteTaskRequest} from "../api/tasks.api.js";
import { useParams, useNavigate } from "react-router-dom";

import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";


function TaskCard({task}){
  const {deleteTask,ToggleDoneTask} = useContext(TaskContext);

  const params = useParams();
  const navigate = useNavigate();
  

 /* const handleDelete = async (id) =>{
      try{
          const response = await deleteTaskRequest(id);
          console.log(response);
      } catch(error){
          console.error(error);
      }
  };*/
const handleDone = async (id) =>{
  await ToggleDoneTask(id);
}
    return(
      <div key={task.id} className="bg-zinc-700 text-white rounded-md p-4">
        <header className="flex justify-between">
          <h2 className="text-md font-bold">{task.title}</h2>
          <span>{task.done == 1? "✔️":"❌"}</span>
        </header>


        <p>{task.description}</p>
        <span>{task.createAt}</span>
        <div  className="flex gap-x-2">
          <button className="bg-red-500 px-2 py-1" onClick={() => deleteTask(task.id)}>Delete</button>
          <button className="bg-green-500 px-2 py-1" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
          <button className="bg-slate-500 px-2 py-1" onClick={() => handleDone(task.id)}>Toggle Done</button>
        </div>

      </div>
    )
}

export default TaskCard;