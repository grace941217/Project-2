import React from "react";

function Image({ image }) {
  console.log("image: ", image);
  const { data, href, links } = image;
  const title = data[0].title;
  const creator = data[0].secondary_creator;
  const description = data[0].description;
  const id = data[0].nasa_id;
  const type = data[0].media_type;
  const thumb = links[0].href;
  return (
    <>
      <h3>{title}</h3>

      <img src={thumb} alt="" />
      <p>{description !== title ? description : "No Caption Available"}</p>
      <br />
      <hr />
      <br />
      <br />
    </>
  );
}

export default Image;
