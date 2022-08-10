import React, { useState } from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
}
const ReminderList = ({ items }: ReminderListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
};
export default ReminderList;
