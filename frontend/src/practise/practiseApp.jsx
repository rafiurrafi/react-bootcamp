import React from "react";
import ExpenseTracker from "./components/expenseTracker";
import "./practiseApp.scss";
const PractiseApp = (props) => {
  return (
    <div className="practiseApp">
      <ExpenseTracker />
    </div>
  );
};
export default PractiseApp;
