import React from "react";
import Button from "./common/button";
import Select from "./common/select";
import useInput from "./hooks/inputHooks";
import Input from "./common/input";

import alermIcon from "../assets/alerm-icon.svg";
import errorIcon from "../assets/error-icon.svg";
import feesIcon from "../assets/fees-icon.svg";
import dropIcon from "../assets/drop-icon.png";
const HeroForm = (props) => {
  const [country, setCountry] = useInput("us");
  const [receivingMethod, setReceivingMethod] = useInput("mobile");
  const [delivery, setDelivery] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className="hero__form">
      <h6 className="heading__hexa">Send money abroad</h6>
      <form onSubmit={handleSubmit}>
        <Select
          text="country"
          value={country}
          onChange={setCountry}
          icon={dropIcon}
          options={[
            { value: "us", text: "USA" },
            { value: "pk", text: "PAK" },
          ]}
        />
        <Select
          text="Receiving Method"
          value={receivingMethod}
          onChange={setReceivingMethod}
          icon={dropIcon}
          options={[
            { value: "mobile", text: "Mobile" },
            { value: "laptop", text: "Laptop" },
          ]}
        />
        <Input
          text="Delivery channel"
          value={delivery}
          onChange={setDelivery}
          placeholder="Channel 1"
        />

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
          <label>You send</label>
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
        <Button type="submit" label="Log in" full={true} size="bg" />
      </form>
    </div>
  );
};

export default HeroForm;
