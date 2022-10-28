import React, { useState } from "react";

function MarsPic({ image, user, allUsers, updateUser }) {
  const [isLiked, setIsLiked] = useState(false);
  const { camera, img_src, rover } = image;

  const roverName = rover.name;
  const cameraName = camera.full_name;
  // const cameraAbbr = camera.name;
  // const roverLandingDate = rover.landing_date;
  // const roverLaunchDate = rover.launch_date;
  // const roverStatus = rover.status;
  // console.log("user: ", user);

  const handleLikeClick = () => {
    const duplicateCheck = user.favorites.filter(
      (userImage) => userImage.id === image.id
    );
    if (duplicateCheck.length > 0) return null;

    setIsLiked(true);

    const newFavorites = [...user.favorites, image];

    const configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        application: "application/json",
      },
      body: JSON.stringify({ favorites: newFavorites }),
    };
    fetch(`http://localhost:3000/users/${user.id}`, configObj)
      .then((r) => r.json())
      .then((data) => updateUser(data));
  };

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
    // borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(5, 5, 5, 1)",
  };

  const likeButtonStyles = {
    backgroundColor: "rgb(219, 219, 219)",
    border: "2px solid gray",
    padding: "0.4rem 0.9rem",
    borderRadius: "10px",
    fontWeight: "700",
    color: "#333",
  };

  //============================================================
  return (
    <div style={imageContainerStyles}>
      <img src={img_src} alt="" style={imageStyles} />
      <p style={captionStylesTop}>
        Taken by <span style={roverNameStyles}>{roverName}</span>'s
      </p>
      <p style={captionStylesBottom}> {cameraName}</p>
      <button onClick={handleLikeClick} style={likeButtonStyles}>
        {isLiked ? "In favorites" : "Click to Favorite"}
      </button>
    </div>
  );
}

export default MarsPic;
