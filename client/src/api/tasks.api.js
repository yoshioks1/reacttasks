import axios from "axios";

export const createTaskRequest = async (task) =>{
    return await axios.post("http://localhost:4100/tasks", task)
}

export const getTasksRequest = async () =>{
   return await axios.get("http://localhost:4100/tasks")
}
  
export const deleteTaskRequest = async (id) =>{
   return await axios.delete(`http://localhost:4100/tasks/${id}`);
}

export const updateTaskRequest = async (id, newFields) =>{
  return await axios.put(`http://localhost:4100/tasks/${id}`, newFields);}

export const ToggledDoneTaskRequest = async (id, done) =>{
  return await axios.put(`http://localhost:4100/tasks/${id}`, {done});}

export const getTask_oneRequest = async (id) =>{
  return await axios.get(`http://localhost:4100/tasks/${id}`);
}
