import React from "react";
import Button from "./common/button";
import alermIcon from "../assets/alerm-icon.svg";
import errorIcon from "../assets/error-icon.svg";
import feesIcon from "../assets/fees-icon.svg";
const HeroForm = (props) => {
  return (
    <div className="hero__form">
      <h6 className="heading__hexa">Send money abroad</h6>
      <form>
        <div className="form-group">
          <label>Country</label>
          <select className="form-control">
            <option value="us">USA</option>
          </select>
        </div>
        <div className="form-group">
          <label>Receiving Method</label>
          <select className="form-control">
            <option value="mobile">Mobile</option>
          </select>
        </div>

        <div className="form-group">
          <label>Delivery channel</label>
          <input type="text" placeholder="Channel 1" className="form-control" />
        </div>
        <div className="form-group">
          <label>Delivery channel</label>
          <div className="form-compound">
            <input type="text" placeholder="840" />
            <select>
              <option value="mobile">USD</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Recipient will receive</label>
          <div className="form-compound">
            <input type="text" placeholder="100" />
            <select>
              <option value="mobile">EUR</option>
            </select>
          </div>
        </div>
        <div className="form-text-content">
          <div className="form-text">
            <img src={alermIcon} alt="alerm icon" /> Exchange rate 1 SEK
          </div>
          <div className="form-text">
            <img src={errorIcon} alt="alerm icon" /> 0.121 SEK
          </div>
        </div>
        <div className="form-text">
          <img src={feesIcon} alt="alerm icon" /> Exchange rate 1 SEK
        </div>
        <div className="form-pay">
          <p>Total to pay</p>
          <p>4,38</p>
        </div>
        <Button label="Log in" full={true} size="bg" />
      </form>
    </div>
  );
};

export default HeroForm;
