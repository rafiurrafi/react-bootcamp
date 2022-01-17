import "./sidebar.scss";
import { Event, RssFeed, School, WorkOutline } from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <RssFeed className="sidebar__icon" />
            <span className="sidebar__list-item-text">Feed</span>
          </li>
          <li className="sidebar__list-item">
            <RssFeed className="sidebar__icon" />
            <span className="sidebar__list-item-text">Feed</span>
          </li>
          <li className="sidebar__list-item">
            <RssFeed className="sidebar__icon" />
            <span className="sidebar__list-item-text">Feed</span>
          </li>
          <li className="sidebar__list-item">
            <School className="sidebar__icon" />
            <span className="sidebar__list-item-text">Courses</span>
          </li>
          <li className="sidebar__list-item">
            <Event className="sidebar__icon" />
            <span className="sidebar__list-item-text">Event</span>
          </li>
          <li className="sidebar__list-item">
            <WorkOutline className="sidebar__icon" />
            <span className="sidebar__list-item-text">Jobs</span>
          </li>
        </ul>
        <button className="sidebar__button">Show more</button>
        <hr style={{ margin: "10px 0" }} />
        <ul className="sidebar__friend-list">
          <li className="sidebar__friend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="sidebar__friend-img"
            />
            <span className="sidebar__friend-name">Jhon doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="sidebar__friend-img"
            />
            <span className="sidebar__friend-name">Jhon doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="sidebar__friend-img"
            />
            <span className="sidebar__friend-name">Jhon doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="sidebar__friend-img"
            />
            <span className="sidebar__friend-name">Jhon doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="sidebar__friend-img"
            />
            <span className="sidebar__friend-name">Jhon doe</span>
          </li>
          <li className="sidebar__friend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="sidebar__friend-img"
            />
            <span className="sidebar__friend-name">Jhon doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
