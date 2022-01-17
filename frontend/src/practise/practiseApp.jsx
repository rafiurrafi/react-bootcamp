import React from "react";
import "./practiseApp.scss";
const PractiseApp = (props) => {
  return (
    <div>
      <h1>Expense tracker</h1>
      <div className="show-design">
        <h5>Your balance</h5>
        <h4>$260.00</h4>
      </div>
      {/* Balance showcase  */}
      <div className="balance-showcase">
        <div className="show-balance__income">
          <p className="show-balance__title show-balance__title--green">
            Income
          </p>
          <p className="show-balance__amount">$500</p>
        </div>
        <div className="show-balance__income">
          <p className="show-balance__title show-balance__title--red">Income</p>
          <p className="show-balance__amount">$500</p>
        </div>
        {/* Balance history  */}
        <div className="balance-history">
          <h4 className="heading__secondary">History</h4>
          <div className="balance-history__cards">
            <div className="balance-history__card balance-history__card--green">
              <p className="balance-history__text">Cash</p>
              <p className="balance-history__amount">+500</p>
            </div>
            <div className="balance-history__card balance-history__card--red">
              <p className="balance-history__text">Cash</p>
              <p className="balance-history__amount">-200</p>
            </div>
            <div className="balance-history__card balance-history__card--red">
              <p className="balance-history__text">Cash</p>
              <p className="balance-history__amount">-50</p>
            </div>
          </div>
        </div>
        {/* Balance tx  */}
        <div className="balance-tx">
          <h4 className="heading__secondary">History</h4>
          <form>
            <div className="form-group">
              <label htmlFor="text">Text</label>
              <input type="text" placeholder="Enter text" />
            </div>
            <div className="form-group">
              <label htmlFor="text">
                Amount <br /> (neg - exp, pos - income)
              </label>
              <input type="text" placeholder="Enter amount" />
            </div>
            <button>Add transaction</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PractiseApp;
