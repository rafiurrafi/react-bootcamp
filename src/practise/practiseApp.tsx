import ReminderList from "./component/reminderList";
import Reminder from "./models/reminder";
import { useEffect, useState } from "react";
import reminderService from "./services/reminder";
const PractiseApp = () => {
  const items: Reminder[] = [{ id: 1, title: "Sitrn" }];
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {}, []);
  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };
  return (
    <div>
      <ReminderList items={items} />
    </div>
  );
};

export default PractiseApp;
