import React from "react";
import { v4 as uuidv4 } from "uuid";

import projectPlanning from "../assets/images/projectPlanning.svg";

import { Image, Tag, Todo } from "../components";

import { TagItems } from "../data/TagItems";

export const Tasks = () => {
  return (
    <section className="tasks">
      <div className="pages-container">
        <div className="tasks-inner">
          <div className="tasks__header">
            <div className="tasks-left">
              <h2 className="tasks__title">All tasks</h2>
            </div>

            <div className="tasks-right">
              <ul className="tags tags__list tasks__tags-list">
                {TagItems &&
                  TagItems.map((tag) => (
                    <Tag className="tasks__tags-item" key={uuidv4()} {...tag} />
                  ))}
              </ul>
            </div>
          </div>

          <Todo />

          <div className="tasks__status">
            <div className="tasks__status-inner">
              <Image
                src={projectPlanning}
                width="250px"
                height="200px"
                className="tasks__status-image"
              />
              <div className="tasks__status-title">All clear</div>
              <div className="tasks__status-subtitle">
                Looks like everything&apos;s organized
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
