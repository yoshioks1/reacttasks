/*rcfe*/ 
import React from 'react'
import { Form, Formik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskForm() {

  const {createTask,getSingleTask,UpdateTask} = useContext(TaskContext);
  const params = useParams(); //console.log(params); //URL
  const navigate = useNavigate();
  
  const [task,setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      console.log(params.id);
      if (params.id) {
        const taskx = await getSingleTask(params.id);
        //console.log(taskx);
        //Populate object
        setTask({
          title: taskx.title,
          description: taskx.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      
      <h1 className="text-5xl font-bold uppercase text-center text-white">
        {params.id ? "Edit Task" : "New Task"}
      </h1>
    <Formik
        initialValues = {task}
        enableReinitialize={true}
        onSubmit={async (values,actions)=>{
          if (params.id) {
            //When updating a task
            await UpdateTask(params.id,values);
            navigate("/");
            //actions.resetForm(); 
          }else{
            //When creating a task
            await createTask(values);
            actions.resetForm();  
          } 
          setTask({
            title: "",
            description: ""
          });  
                 
        }} //End:onSumbit
    >


      {({handleChange, handleSubmit,  values, isSubmitting})=>(

        <Form onSubmit={handleSubmit} className="max-w-md rounded-md p-4">
        <label className="block text-2xl font-bold text-white p-2">title</label>
        <input
          type="text"
          name="title"
          placeholder="Write a title"
          onChange={handleChange}
          value={values.title}
          className="w-full p-2"
        />

        <label className="block text-2xl font-bold text-white p-2">description</label>
        <textarea
          name="description"
          rows="3"
          placeholder="Write a description"
          onChange={handleChange}   
          value={values.description}
          className="w-full"
        ></textarea>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
        </Form>

      )}

    </Formik>
    </div>
  )
}

export default TaskForm