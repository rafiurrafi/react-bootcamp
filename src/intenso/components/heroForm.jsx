import React from "react";

const HeroForm = (props) => {
  return (
    <div className="hero__form">
      <h6 className="heading-hexa">Send money abroad</h6>
      <form>
        <div className="form-group">
          <label>Country</label>
          <select className="form-control">
            <option value="us">USA</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;
