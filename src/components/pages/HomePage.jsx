import { useState } from "react";
import CurrentTasks from "../Tasks/CurrentTasks/CurrentTasks";
import { remove, changeList } from "../../services/task.service";
import cl from "./pages.module.css";
import CompletedTasks from "../Tasks/CompetedTasks/CompletedTasks";

function HomePage() {
  const [taskName, setTaskName] = useState("");

  const [currentTasks, setCurrentTasks] = useState([
    { id: 1, title: "watch monkey gifs" },
    { id: 2, title: "scroll 2ch/b" },
    { id: 3, title: "get cocoain overdose" },
  ]);

  const [completedTasks, setCompletedTasks] = useState([
    {id: 11, title: "first ever completed task"},
    {id: 22, title: "first ever completed task"},
    {id: 33, title: "first ever completed task"},
  ]);

  return (
    <main className={cl.main}>
      <div className={cl.addTaskArea}>
        <input
          type={"text"}
          className={cl.addTaskInput}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          onClick={() => {
            const newTask = {
              id: new Date().getTime(),
              title: taskName,
            };
            setCurrentTasks([...currentTasks, newTask]);
            setTaskName("");
          }}
        >
          add task
        </button>
      </div>
      <div className={cl.allTasks}>
        <CurrentTasks
          tasks={currentTasks}
          remove={(task) => remove(task, currentTasks, setCurrentTasks)}
          setTasks={setCurrentTasks}
          changeList={(task) => changeList(task, currentTasks, setCurrentTasks, completedTasks, setCompletedTasks)}
        />
        <CompletedTasks 
          tasks={completedTasks} 
          remove={(task) => remove(task, completedTasks, setCompletedTasks)}
          setTasks={setCompletedTasks}
          changeList={(task) => changeList(task, completedTasks, setCompletedTasks, currentTasks, setCurrentTasks)}
        />
      </div>
    </main>
  );
}

export default HomePage;
