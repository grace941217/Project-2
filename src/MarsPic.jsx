import React from "react";

function MarsPic({ image }) {
  const { camera, earth_date, id, img_src, rover, sol } = image;

  const cameraName = camera.full_name;
  const cameraAbbr = camera.name;

  const roverName = rover.name;
  const roverLandingDate = rover.landing_date;
  const roverLaunchDate = rover.launch_date;
  const roverStatus = rover.status;

  return (
    <>
      <h2>{roverName}</h2>
      <p>Picture taken by the {cameraName}</p>
      <img src={img_src} alt="" />
    </>
  );
}

export default MarsPic;
