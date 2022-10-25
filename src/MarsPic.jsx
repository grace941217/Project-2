import React, { useState } from "react";

function MarsPic({ image, user, allUsers }) {
  const [isLiked, setIsLiked] = useState(false);

  const { camera, earth_date, id, img_src, rover, sol } = image;

  const cameraName = camera.full_name;
  const cameraAbbr = camera.name;

  const roverName = rover.name;
  const roverLandingDate = rover.landing_date;
  const roverLaunchDate = rover.launch_date;
  const roverStatus = rover.status;

  console.log("user: ", user);

  //   const handleLikeClick = () => {
  //     setIsLiked(true);

  //     const newFavorites = [...user.favorites, image];

  //     const configObj = {
  //       method: "PATCH",
  //       headers: {
  //         "content-type": "application/json",
  //         application: "application/json",
  //       },
  //       body: JSON.stringify({ favorites: newFavorites }),
  //     };
  //   };
  //   fetch(`http://localhost:3000/users/${user.id}`)
  //     .then((r) => r.json())
  //     .then((data) => console.log("postData: ", data));
  //============= STYLES ======================================
  const imageContainerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "4rem",
    paddingTop: "2rem",
    // backgroundColor: "rgba(89, 89, 89, 0.5)",
    color: "white",
    textShadow: "2px 2px 1px #222",

    //width: "300px",
  };
  const roverNameStyles = {
    fontWeight: "bold",
    fontSize: "1.3rem",
  };

  const captionStylesTop = {
    marginBottom: "0px",
  };
  const captionStylesBottom = {
    marginTop: "0.5rem",
    fontStyle: "italic",
    fontWeight: "bold",
  };

  const imageStyles = {
    width: "80%",
    borderRadius: "10px",
  };

  //============================================================
  return (
    <div style={imageContainerStyles}>
      <img src={img_src} alt="" style={imageStyles} />
      <p style={captionStylesTop}>
        Taken by <span style={roverNameStyles}>{roverName}</span>'s
      </p>
      <p style={captionStylesBottom}> {cameraName}</p>
      {/* <button onClick={handleLikeClick}>
        {isLiked ? "In favorites" : "Click to Favorite"}
      </button> */}
    </div>
  );
}

export default MarsPic;
