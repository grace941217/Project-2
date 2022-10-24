import React, { useState, useEffect } from "react";
//import { configKeys } from "./config.js";
import "./App.css";
import SatPics from "./SatPics.jsx";
import Media from "./Media.jsx";
import Login from "./Login";
import "./index.css";

function App() {
  //======== USER STATES ===================
  const [loggedIn, setLoggedIn] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState("");

  // Initialize allUsers
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);
  console.log("allUsers: ", allUsers);

  //======== USER CALLBACKS =============
  const logInToggle = () => {
    if (loggedIn) setUser("");
    setLoggedIn(!loggedIn);
  };

  const onSetUser = (user) => {
    setUser(user[0]);
  };

  const onCreateUser = (user) => {
    // Update Frontend
    setAllUsers([...allUsers, user]);
    console.log("in onCreateUser");
    // Update Backend
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(user),
    };
    fetch("http://localhost:3000/users", configObj)
      .then((res) => res.json())
      .then((data) => console.log("posted!", data));
  };

  return (
    <div style={{ margin: "0" }}>
      {loggedIn ? (
        <div>
          <Media />
          <SatPics />
        </div>
      ) : (
        <Login
          className="login"
          loggedIn={loggedIn}
          allUsers={allUsers}
          logInToggle={logInToggle}
          onSetUser={onSetUser}
          onCreateUser={onCreateUser}
        />
      )}
    </div>
  );
}

export default App;
