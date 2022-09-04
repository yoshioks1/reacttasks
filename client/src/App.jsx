import { Route, Routes } from "react-router-dom";

import TasksPage from "./pages/TasksPage.jsx";
import TasksForm from "./pages/TaskForm.jsx";
import Notfound from "./pages/NotFound.jsx";

import Navbar from "./components/Navbar.jsx";

import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return(
    <>
      <div className="bg-zinc-900 h-screen">
        <Navbar/>
        <div className="container mx-auto py-4 px-20">
          <TaskContextProvider>
            <Routes>
              <Route path="/" element={<TasksPage />} />
              <Route path="/new" element={<TasksForm />} />
              <Route path="/edit/:id" element={<TasksForm />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </TaskContextProvider>
        </div>
      </div>
    </>

  )
}

export default App;
