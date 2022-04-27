import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "./Task";
import { CreateTask } from "./CreateTask";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

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
