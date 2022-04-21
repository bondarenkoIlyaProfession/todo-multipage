import React, { useState } from "react";
import PropTypes, { shape } from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { FiPlusCircle } from "react-icons/fi";

import { Button } from "./Button";
import { Tag } from "./Tag";
import { TagItemsAddTaskLeft, TagItemsAddTaskRight } from "../data/TagItems";

export const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <div className="task">
      <div className="task__actions">
        <div
          className={
            task.completed ? "task__status task__status-filled" : "task__status"
          }
          onClick={() => completeTask(index)}
          aria-hidden="true"
        />
        <div
          className="task__remove"
          onClick={() => removeTask(index)}
          aria-hidden="true"
        >
          Remove
        </div>
      </div>

      <div className="task__content">
        <div className="task__title">{task.title}</div>
        <div className="task__description">{task.description}</div>
      </div>
    </div>
  );
};

export const CreateTask = ({ addTask }) => {
  const [isAddTaskEditorActive, setIsAddTaskEditorActive] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const addTaskEditorHandler = (e) => {
    e.preventDefault();
    setIsAddTaskEditorActive(!isAddTaskEditorActive);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!titleValue) return;

    addTask(titleValue, descriptionValue);
  };

  return (
    <div>
      <div
        className="add-task"
        onClick={addTaskEditorHandler}
        aria-hidden="true"
      >
        <FiPlusCircle className="add-task__icon" size="20px" />
        Add Task
      </div>

      <form
        className={
          isAddTaskEditorActive
            ? "add-task__editor add-task__editor-active"
            : "add-task__editor"
        }
      >
        <div className="add-task__content">
          <div className="add-task__areas">
            <textarea
              placeholder="Title"
              maxLength={90}
              className="add-task__title-area"
              value={titleValue}
              onChange={({ target }) => setTitleValue(target.value)}
            />

            <textarea
              placeholder="Description"
              className="add-task__description-area"
              value={descriptionValue}
              onChange={({ target }) => setDescriptionValue(target.value)}
            />
          </div>

          <div className="add-task__list">
            <ul className="add-task__list-left">
              {TagItemsAddTaskLeft &&
                TagItemsAddTaskLeft.map((tag) => (
                  <Tag key={uuidv4()} {...tag} />
                ))}
            </ul>

            <ul className="add-task__list-right">
              {TagItemsAddTaskRight &&
                TagItemsAddTaskRight.map((tag) => (
                  <Tag key={uuidv4()} {...tag} />
                ))}
            </ul>
          </div>
        </div>

        <div className="add-task__buttons">
          <Button onClick={submitHandler} disabled={!titleValue}>
            Add Task
          </Button>

          <Button onClick={addTaskEditorHandler}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

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

Task.propTypes = {
  task: shape({}).isRequired,
  index: PropTypes.number.isRequired,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func,
};

Task.defaultProps = {
  completeTask: () => {},
  removeTask: () => {},
};

CreateTask.propTypes = {
  addTask: PropTypes.func,
};

CreateTask.defaultProps = {
  addTask: () => {},
};
