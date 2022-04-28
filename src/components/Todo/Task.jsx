/* eslint-disable react/style-prop-object */
import React from "react";
import PropTypes, { shape } from "prop-types";

export const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <div className="task">
      <div className="task__actions">
        <div
          className={
            task.completed ? "task__status task__status-filled" : "task__status"
          }
          onClick={() => completeTask(index)}
        />
        <div className="task__remove" onClick={() => removeTask(index)}>
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
