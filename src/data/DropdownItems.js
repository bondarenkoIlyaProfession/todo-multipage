import React from "react";

import {
  BsQuestionCircleFill,
  BsPencilFill,
  BsCollectionFill,
  BsKeyboardFill,
  BsTerminalFill,
  BsCapslockFill,
  BsLightbulbFill,
  BsGearFill,
  BsPaletteFill,
  BsEaselFill,
  BsPrinterFill,
  BsStarFill,
  BsPeopleFill,
  BsPhoneFill,
  BsDoorOpenFill,
} from "react-icons/bs";

export const DropdownSupportItems = [
  { title: "Help", leftIcon: <BsQuestionCircleFill size="18px" /> },
  { title: "Blog", leftIcon: <BsPencilFill size="18px" /> },
  { title: "Templates", leftIcon: <BsCollectionFill size="18px" /> },
  { title: "Keyboard shortcuts", leftIcon: <BsKeyboardFill size="18px" /> },
  { title: "Command menu", leftIcon: <BsTerminalFill size="18px" /> },
  { title: "Getting started guide", leftIcon: <BsCapslockFill size="18px" /> },
  { title: "What's new", leftIcon: <BsLightbulbFill size="18px" /> },
];

export const DropdownUserItems = [
  { title: "Settings", leftIcon: <BsGearFill size="18px" /> },
  { title: "Theme", leftIcon: <BsPaletteFill size="18px" /> },
  { title: "Activity log", leftIcon: <BsEaselFill size="18px" /> },
  { title: "Print", leftIcon: <BsPrinterFill size="18px" /> },
  {
    title: "Upgrade to Pro",
    leftIcon: <BsStarFill size="18px" color="#ff8000" />,
  },
  {
    title: "Upgrade to Business",
    leftIcon: <BsPeopleFill size="18px" color="#add8e6" />,
  },
  { title: "Download apps", leftIcon: <BsPhoneFill size="18px" /> },
  { title: "Log out", leftIcon: <BsDoorOpenFill size="18px" /> },
];
