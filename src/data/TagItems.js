import React from "react"; // ESLint gives an error due to the absence of this import

import {
  BsFillChatRightTextFill,
  BsSliders,
  BsThreeDots,
} from "react-icons/bs";

export const TagItems = [
  { tagText: "Comments", icon: <BsFillChatRightTextFill size="20px" /> },
  { tagText: "View", icon: <BsSliders size="20px" /> },
  { tagText: "More", icon: <BsThreeDots size="20px" /> },
];

export const TagItemsAddTaskLeft = [
  { tagText: "0", icon: <BsThreeDots size="20px" /> },
  { tagText: "1", icon: <BsThreeDots size="20px" /> },
];

export const TagItemsAddTaskRight = [
  {
    tagText: "",
    icon: <BsThreeDots size="20px" />,
    className: "tags__item-without-text",
  },
  {
    tagText: "",
    icon: <BsThreeDots size="20px" />,
    className: "tags__item-without-text",
  },
  {
    tagText: "",
    icon: <BsThreeDots size="20px" />,
    className: "tags__item-without-text",
  },
];
