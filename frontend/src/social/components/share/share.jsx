import { PermMedia } from "@material-ui/icons";
import "./share.scss";
const Share = () => {
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img className="share__top-img" src="/assets/person/4.jpeg" alt="" />
          <input
            type="text"
            placeholder="What's in your mind"
            className="share__top-input"
          />
        </div>
        <hr style={{ margin: "20px 0" }} />
        <div className="share__bottom">
          <div className="share__options">
            <div className="share__option">
              <PermMedia className="share__option-icon" />
              <span className="share__option-text">Photos or Videos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
