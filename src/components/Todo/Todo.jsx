import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "./Task";
import { CreateTask } from "./CreateTask";

const getLocalItem = () => {
  const taskList = localStorage.getItem("all-tasks");

  if (taskList) {
    return JSON.parse(taskList);
  }
  return [];
};

export const Todo = () => {
  const [tasks, setTasks] = useState(getLocalItem());

  const addTask = (title, description) => {
    const newTasks = [...tasks, { title, description, completed: false }];

    setTasks(newTasks);
  };

  const completeTask = (currentTask) => {
    const newTasks = [...tasks];

    if (newTasks[currentTask].completed) {
      newTasks[currentTask].completed = false;
    } else {
      newTasks[currentTask].completed = true;
    }

    setTasks(newTasks);
  };

  const removeTask = (currentTask) => {
    const newTasks = [...tasks];

    newTasks.splice(currentTask, 1);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("all-tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <CreateTask addTask={addTask} />

      <div className="tasks">
        {tasks.map((task, index) => {
          return (
            <Task
              task={task}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
              key={uuidv4()}
            />
          );
        })}
      </div>
    </div>
  );
};
