import React from "react";
import "./practiseApp.scss";
const PractiseApp = (props) => {
  return (
    <div className="practiseApp">
      <h1 className="text-center my-5 fw-bold">Expense tracker</h1>
      <div className="show-design mb-3 ">
        <h5 className="fw-bold  mb-0">Your balance</h5>
        <h4 className="fw-bold  mb-0">$260.00</h4>
      </div>
      {/* Balance showcase  */}
      <div className="balance-showcase bg-white d-flex justify-content-center py-5 my-5">
        <div className="show-balance__income px-5">
          <p className="show-balance__title  show-balance__title--green fw-bold mb-0">
            Income
          </p>
          <p className="show-balance__amount text-success">$500</p>
        </div>
        <div className="show-balance__income px-5">
          <p className="show-balance__title show-balance__title--red fw-bold mb-0">
            Income
          </p>
          <p className="show-balance__amount text-warning">$500</p>
        </div>
      </div>

      {/* Balance history  */}
      <div className="balance-history">
        <h4 className="heading__secondary pb-3 mb-4">History</h4>
        <div className="balance-history__cards">
          <div className="balance-history__card balance-history__card--green bg-white d-flex justify-content-between mb-3 align-items-center px-3 py-2">
            <p className="balance-history__text mb-0">Cash</p>
            <p className="balance-history__amount mb-0">+500</p>
          </div>
          <div className="balance-history__card balance-history__card--red bg-white d-flex justify-content-between mb-3 align-items-center px-3 py-2">
            <p className="balance-history__text mb-0">Cash</p>
            <p className="balance-history__amount mb-0">-200</p>
          </div>
          <div className="balance-history__card balance-history__card--red bg-white d-flex justify-content-between mb-3 align-items-center px-3 py-2">
            <p className="balance-history__text mb-0">Cash</p>
            <p className="balance-history__amount mb-0">-50</p>
          </div>
        </div>
      </div>
      {/* Balance tx  */}
      <div className="balance-tx">
        <h4 className="heading__secondary pb-3 mb-4">History</h4>
        <form>
          <div className="form-group mb-4">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              placeholder="Enter text"
              className="form-control  mt-2"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="text">
              Amount <br /> (neg - exp, pos - income)
            </label>
            <input
              type="text"
              placeholder="Enter amount"
              className="form-control  mt-2"
            />
          </div>
          <button className="btn btn-primary w-100 d-block">
            Add transaction
          </button>
        </form>
      </div>
    </div>
  );
};
export default PractiseApp;
