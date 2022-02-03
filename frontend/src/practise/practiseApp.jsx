import React from "react";
import ExpenseTracker from "./components/expenseTracker";
import Sliders from "./components/sliders";
import "./practiseApp.scss";
const PractiseApp = (props) => {
  return (
    <div className="practiseApp">
      <ExpenseTracker />
      {/* <Sliders /> */}
    </div>
  );
};
export default PractiseApp;
