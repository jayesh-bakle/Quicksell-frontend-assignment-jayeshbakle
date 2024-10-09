import React from "react";
import NoPriority from "../../../images/No-priority.svg";
import LowPriorityIcon from "../../../images/Img - Low Priority.svg";
import MediumPriorityIcon from "../../../images/Img - Medium Priority.svg";
import HighPriorityIcon from "../../../images/Img - High Priority.svg";
import CriticalPriorityIcon from "../../../images/SVG - Urgent Priority colour.svg";

const PriorityLevel = ({ priority }) => {
  const priorityIcons = [
    <img src={NoPriority} alt="No Priority" />,
    <img src={LowPriorityIcon} alt="Low Priority" />,
    <img src={MediumPriorityIcon} alt="Medium Priority" />,
    <img src={HighPriorityIcon} alt="High Priority" />,
    <img src={CriticalPriorityIcon} alt="Critical Priority" />,
  ];

  return <div>{priorityIcons[priority]}</div>;
};

export default PriorityLevel;
