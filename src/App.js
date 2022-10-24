import React, { useState, useEffect } from "react";
//import { configKeys } from "./config.js";
import "./App.css";
import SatPics from "./SatPics.jsx";
import Media from "./Media.jsx";
import Login from "./Login";
import Nav from "./Nav";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Mars from "./Mars";

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
    console.log("App loggedIn: ", loggedIn);
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

  console.log("App loggedIn: ", loggedIn);
  console.log("App user: ", Boolean(user), user);

  return (
    <div style={{ margin: "0" }}>
      {loggedIn ? (
        <div>
          <Nav />
          <Switch>
            <Route>
              <Media path="/media" />
            </Route>
            <Route>
              <SatPics path="/satpics" />
            </Route>
            <Route>
              <Mars path="/mars" />
            </Route>
          </Switch>
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
//   return (
//     <div style={{ margin: "0" }}>
//       {loggedIn ? (
//         <div>
//           <Nav />
//           <Media />
//           <SatPics />
//         </div>
//       ) : (
//         <Login
//           className="login"
//           loggedIn={loggedIn}
//           allUsers={allUsers}
//           logInToggle={logInToggle}
//           onSetUser={onSetUser}
//           onCreateUser={onCreateUser}
//         />
//       )}
//     </div>
//   );
// }

// export default App;
