import React from "react";
import "./styles/footer.scss";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__left">
          <p>© 2019 eDreams ODIGEO | All rights reserved</p>
          <p>Cookie | Privacy | Terms & Conditions</p>
        </div>
        <div className="footer__right">
          <a href="https://#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
