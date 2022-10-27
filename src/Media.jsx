import React, { useState, useEffect } from "react";
// import background from "./images/login-page-1.jpg";
import backgroundTwo from "./images/nasa-label-cropped2.jpg";
// import backgroundThree from "./images/observation.jpg";

import Image from "./Image";

function Media() {
  const [query, setQuery] = useState("");
  const [confirmedQuery, setConfirmedQuery] = useState("");
  const [results, setResults] = useState([]);

  // const { data, href } = results;

  const nasaKey = process.env.REACT_APP_NASA_API_KEY;
  const geoKey = process.env.REACT_APP_GMAPS_GEO_KEY;
  const nasaSearch_api = `https://images-api.nasa.gov/search?q=${query}`;

  useEffect(() => {
    if (confirmedQuery) {
      fetch(nasaSearch_api)
        .then((r) => r.json())
        .then((data) => setResults(data.collection.items.slice(0, 10)));
    }
  }, [confirmedQuery]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmedQuery(query);
  };

  const displayedResults = results.map((image) => {
    return <Image key={image.data[0].nasa_id} image={image} />;
  });

  // console.log("results: ", results);
  // console.log("query: ", query);
  // console.log("displayedResults: ", displayedResults);

  //==================== STYLES ================================================
  const outerPageWrapperStyles = {
    height: "1000vh",
  };
  const outerPageStyles = {
    // backgroundImage: `url(${backgroundTwo})`,
    // backgroundSize: "contain",
    // backgroundBlendMode: "lighten",
    //height: "100vh",
    //backgroundColor: "#E9F1F0",
    color: "white",
    //width: "1fr",
    justifyContent: "flex-start",
    display: "flex",
    backgroundImage: `url(${backgroundTwo})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexGrow: "2",
    textAlign: "center",
    fontSize: "1rem",
    height: "100%",
    // fontSize: "",

    // backgroundAttachment: "fixed",
  };
  // const outerPageStyles = {
  //   // backgroundImage: `url(${backgroundTwo})`,
  //   // backgroundSize: "contain",
  //   // backgroundBlendMode: "lighten",
  //   display: "flex",
  //   //height: "100vh",
  //   justifyContent: "flex-start",
  //   backgroundColor: "#E9F1F0",

  //   // backgroundAttachment: "fixed",
  // };
  const wholeFormStyles = {
    width: "30rem",
    display: "flex",
    flexDirection: "column",
    //justifyContent: "flex-end",
    //alignItems: "flex-start",
    textAlign: "left",
    marginTop: "10rem",
    marginLeft: "1rem",
  };

  const displayStyles = {
    // color: "white",
    // width: "1fr",
    // backgroundImage: `url(${backgroundTwo})`,
    // // backgroundAttachment: "fixed",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // flexGrow: "2",
    // textAlign: "center",
    // fontSize: "1rem",
    // // fontSize: "",
    // height: "100vh",
  };

  const displayHeaderStyles = {
    fontSize: "4rem",
    textShadow: "2px 2px 0px #222",
    // color: "",
  };

  const logoStyles = {
    color: "#B52006",
    fontWeight: "800",
    fontSize: "5rem",
  };

  const displayGridStyles = {
    //width: "100%",
    //border: "2px solid white",
    display: "grid",
    gridTemplateColumns: "repeat(1, 45fr)",
    gap: "1rem",
    //aligning items inside the grid segments
    justifyItems: "center",
    alignItems: "center",
    //aligning the whole grid inside its container
    justifyContent: "center",
    // backgroundColor: "rgba(60, 60, 60, 0)",
    backgroundColor: "rgb(0,0,0,.75)"
  };

  const inputStyles = {
    padding: "05rem, 0.8rem",
    fontSize: "1.4rem",
    backgroundColor: "rgb(250, 250, 250)",
  };

  const searchLabelStyles = {
    fontSize: "1.4rem",
    paddingRight: "1rem",
    fontWeight: "500",
    color: "rgb(250, 250, 250)",
    // textAlign: "left",
    alignSelf: "start",
  };

  const searchButtonStyles = {
    padding: "0.6rem 1.9rem",
    fontSize: "1.1rem",
    marginLeft: "1rem",
    borderRadius: "20px",
    backgroundColor: "#0C50F9",
    color: "rgb(250, 250, 250)",
  };
  //==========================================================================

  return (
    <div className="wrapper" style={outerPageWrapperStyles}>
      <div className="outer" style={outerPageStyles}>
        {/* <h2 style={displayHeaderStyles}>
        <span style={logoStyles}>NASA</span> Images
      </h2> */}
        <div id="about" style={wholeFormStyles}>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="search" style={searchLabelStyles}>
              Search
            </label>
            <div className="inputs-wrapper">
              <input
                type="text"
                name="search"
                id="search"
                value={query}
                placeholder="Enter a Keyword"
                onChange={handleSearchChange}
                style={inputStyles}
              />
              <input type="submit" name="" id="" style={searchButtonStyles} />
            </div>
          </form>
        </div>
        <div className="display-section" style={displayStyles}>
          <h2 style={displayHeaderStyles}>
            <span style={logoStyles}>NASA</span> Images
          </h2>
          <div className="display-grid" style={displayGridStyles}>
            {displayedResults}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
