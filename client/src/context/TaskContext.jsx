import { createContext, useState } from "react";
import {getTasksRequest,deleteTaskRequest,createTaskRequest,getTask_oneRequest,updateTaskRequest,ToggledDoneTaskRequest} from "../api/tasks.api.js";

export const TaskContext = createContext();

export const TaskContextProvider = ({children})=>{
    const [tasks,setTasks] = useState([])

    async function loadTask(){
        const response = await getTasksRequest()
        setTasks(response.data)
        //console.log(response.data);
    }
    async function deleteTask(id){
        try{
            const response = await deleteTaskRequest(id);
            console.log(response);
            loadTask(); 
            //setTasks(tasks.filter(task=>task.id!==id));
        } catch(error){
            console.error(error);
        }
    }
    async function createTask(values){
        try{
            const response = await createTaskRequest(values);
            console.log(response);
            //actions.resetForm();
          }catch(error){
            console.error(error);
          }
    }
    async function getSingleTask(id){
         
        try{
            const response = await getTask_oneRequest(id);
            return response.data;
            console.log(response);  
          }catch(error){
            console.error(error);
          }

    }
    async function UpdateTask(id,newValues){
        try{
            const response = await updateTaskRequest(id,newValues);
            //console.log(response);
            //actions.resetForm();
          }catch(error){
            console.error(error);
          }
    }
    async function ToggleDoneTask(id){
        try{
           const taskFound = tasks.find((task) => task.id === id);
           await ToggledDoneTaskRequest(id,taskFound.done === 0? true : false);
           await loadTask(); 

        }catch(error){
           console.error(error);
        }

    }
    return (
        <TaskContext.Provider value={{tasks:tasks,loadTask,deleteTask,createTask,getSingleTask,UpdateTask,ToggleDoneTask}}>
            {children}
        </TaskContext.Provider>
    );
}