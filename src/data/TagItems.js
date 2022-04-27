import React from "react";

import {
  BsChatRightTextFill,
  BsSliders,
  BsThreeDots,
  BsCalendar2WeekFill,
  BsInboxFill,
  BsTagsFill,
  BsFlagFill,
  BsAlarmFill,
} from "react-icons/bs";

export const TagItems = [
  { tagText: "Comments", icon: <BsChatRightTextFill size="20px" /> },
  { tagText: "View", icon: <BsSliders size="20px" /> },
  { tagText: "More", icon: <BsThreeDots size="20px" /> },
];

export const TagItemsAddTaskLeft = [
  { tagText: "Schedule", icon: <BsCalendar2WeekFill size="20px" /> },
  { tagText: "Inbox", icon: <BsInboxFill size="20px" /> },
];

export const TagItemsAddTaskRight = [
  {
    tagText: "",
    icon: <BsTagsFill size="20px" />,
    className: "tags__item-right",
  },
  {
    tagText: "",
    icon: <BsFlagFill size="20px" />,
    className: "tags__item-right",
  },
  {
    tagText: "",
    icon: <BsAlarmFill size="20px" />,
    className: "tags__item-right",
  },
];
