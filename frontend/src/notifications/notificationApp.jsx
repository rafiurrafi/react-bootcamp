import React, { useState } from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";
import "./styles/notificationApp.scss";
import { posts } from "./data";
const NotificationApp = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <div className="notification-app">
      {user ? (
        <>
          <Navbar />
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
          <div className="username">{user}</div>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default NotificationApp;
