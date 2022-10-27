import React from "react";
import video from "./images/video-1.mp4"

function Home({user}) {
  const content = {
    position: "absolute",
    width: "100%",
    height: "70%",
    top: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Georgia",
    color: "rgb(183, 177, 201)",
    fontSize: "60px",
    textShadow: "2px 2px 8px blue",
    // textShadow: "2px 2px 5px black, 0 0 1em red, 1 1 0.5em blue",
    // textShadow: "2px 2px 5px black, 0px 0px 1em red, 1 1 0.5em blue",
  }

  return (
    <div className="main" > 
      <video 
        src={video} autoPlay loop muted 
        style={{
          position: "absolute",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <div className="content" >
        <h1 style={content}>WELCOME, {user.name.toUpperCase()}!</h1>
      </div>
    </div>
  )
}

export default Home;
