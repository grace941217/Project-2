import React from "react";

function Image({ image }) {
  const { data, links } = image;
  const title = data[0].title;
  const description = data[0].description;
  const thumb = links[0].href;
  // const id = data[0].nasa_id;
  // const creator = data[0].secondary_creator;
  // const type = data[0].media_type;
  // console.log("image: ", image);

  //========================= STYLES =============================================
  const titleStyles = {
    fontSize: "2rem",
    textShadow: "2px 2px 0px #222",
    // backgroundColor: "rgba(100, 100, 100, 0.7)",
  };

  const captionStyles = {
    padding: "1.5rem",
    backgroundColor: "rgba(50, 50, 50, 0.7)",
    textShadow: "1px 1px 0px #222",
  };

  const imageStyles = {
    width: "30rem",
    boxShadow: "0 0 10px #222",
  };

  const containerStyles = {
    width: "35rem",
  };

  //==============================================================================
  return (
    <div style={containerStyles}>
      <h3 style={titleStyles}>{title}</h3>
      <img src={thumb} alt="" style={imageStyles} />
      <p style={captionStyles}>
        {description !== title ? description : "No Caption Available"}
      </p>
      <br />
      <hr />
      <br />
      <br />
    </div>
  );
}

export default Image;
