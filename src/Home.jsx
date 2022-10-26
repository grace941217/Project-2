import React from "react";
import video from "./images/video-1.mp4"

function Home() {
  const content = {
    position: "absolute",
    width: "100%",
    height: "70%",
    top: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "60px",
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
        <h1 style={content}>Welcome!</h1>
      </div>
    </div>
  )
}

export default Home;
