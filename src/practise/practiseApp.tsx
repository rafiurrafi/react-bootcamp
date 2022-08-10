import ReminderList from "./component/reminderList";
import Reminder from "./models/reminder";
import { useState } from "react";
const PractiseApp = () => {
  const items: Reminder[] = [{ id: 1, title: "Sitrn" }];
  const [reminder, setReminder] = useState<Reminder[]>([]);
  return (
    <div>
      <ReminderList items={items} />
    </div>
  );
};

export default PractiseApp;
