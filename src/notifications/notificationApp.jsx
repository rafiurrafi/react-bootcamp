import React, { useState } from "react";
import "./styles/notificationApp.scss";
const NotificationApp = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <div className="notification-app">
      <div className="login">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => setUser(username)}>Login</button>
      </div>
    </div>
  );
};

export default NotificationApp;
