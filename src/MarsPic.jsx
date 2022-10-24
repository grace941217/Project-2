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

  const handleLikeClick = () => {
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
  };
  fetch(`http://localhost:3000/users/${user.id}`)
    .then((r) => r.json())
    .then((data) => console.log("postData: ", data));

  return (
    <>
      <h2>{roverName}</h2>
      <p>Picture taken by the {cameraName}</p>
      <img src={img_src} alt="" />
      <button onClick={handleLikeClick}>
        {isLiked ? "In favorites" : "Click to Favorite"}
      </button>
    </>
  );
}

export default MarsPic;
