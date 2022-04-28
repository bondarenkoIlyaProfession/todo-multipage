import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { FiPlusCircle } from "react-icons/fi";

import { Button } from "../Button";
import { Tag } from "../Tag";
import { TagItemsAddTaskLeft, TagItemsAddTaskRight } from "../../data/TagItems";

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
      <div className="add-task" onClick={addTaskEditorHandler}>
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

          <Button onClick={addTaskEditorHandler} outline>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

CreateTask.propTypes = {
  addTask: PropTypes.func,
};

CreateTask.defaultProps = {
  addTask: () => {},
};
