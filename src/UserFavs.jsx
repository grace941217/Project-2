import React from "react";
import bgimage from "./images/favorites.jpg"

function UserFavs({ user }) {
  const { favorites } = user
  const listFavs = favorites.map((fav) => {
    return (
      <>
        <img src={fav.img_src} alt="favorite"></img>
        {/* <div>{fav.rover.name}</div> */}
      </>
    )
  })

  const wholePageStyles = {
    backgroundColor: "black",
    backgroundImage: `url(${bgimage})`,
    justifyContent: "flex-start",
    display: "flex",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexGrow: "2",
    textAlign: "center",
    fontSize: "1rem",
    height: "100%",
  };

  const imageContainerStyles = {
    display: "flex",
    float: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "10rem",
    paddingTop: "2rem",
    //width: "300px",
  };

  const content = {
    // position: "absolute",
    // width: "100%",
    // height: "70%",
    // top: "50",
    // bottom: "50%",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    // fontFamily: "Georgia",
    color: "rgb(120, 132, 191)",
    textShadow: "5px 5px 5px #222",
    fontSize: "50px",
    }

    const imageStyles = {
      width: "30%",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(5, 5, 5, 1)",
    };

  return (
    <div style={wholePageStyles}>
      <div style={imageContainerStyles} >
        <h1 style={content}>Favorites</h1>
        <div style={imageStyles}>{listFavs}</div>
      </div>
    </div>
  )
}

export default UserFavs;
