import React from "react";
import FavoritePic from "./FavoritePic";
import backgroundImage from "./images/pexels-felix-mittermeier-1146134.jpg";

function UserFavs({ user }) {
  const { favorites } = user;
  const listFavs = favorites.map((image) => {
    return (
      <>
        <FavoritePic
          src={image.img_src}
          alt="favorite"
          image={image}
          key={image.id}
        />
        {/* <div>{fav.rover.name}</div> */}
      </>
    );
  });

  const wholePageStyles = {
    //backgroundColor: "black",
    backgroundImage: `url(${backgroundImage})`,
    display: "flex",
    flexDirection: "column",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  const imageContainerStyles = {
    //border: "2px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const content = {
    //border: "2px solid white",
    textAlign: "center",
    // fontFamily: "Georgia",
    color: "rgb(120, 132, 191)",
    textShadow: "5px 5px 5px #222",
    fontSize: "30px",
  };

  const picGridStyles = {
    //border: "2px solid pink",
    width: "75vw",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  };

  return (
    <div style={wholePageStyles}>
      <div className="header-container" style={content}>
        <h1>Favorites</h1>
      </div>
      <div style={imageContainerStyles} className="image-container">
        <div className="pic-grid" style={picGridStyles}>
          {listFavs}
        </div>
      </div>
    </div>
  );
}

export default UserFavs;
