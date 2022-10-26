import React, { useState, useEffect } from "react";
import background from "./images/login-page-1.jpg";
import backgroundTwo from "./images/nasa-label.jpg";
import backgroundThree from "./images/observation.jpg";

import Image from "./Image";

function Media() {
  const [query, setQuery] = useState("");
  const [confirmedQuery, setConfirmedQuery] = useState("");
  const [results, setResults] = useState([]);

  const { data, href } = results;

  const nasaKey = process.env.REACT_APP_NASA_API_KEY;
  const geoKey = process.env.REACT_APP_GMAPS_GEO_KEY;
  const nasaSearch_api = `https://images-api.nasa.gov/search?q=${query}`;

  useEffect(() => {
    if (confirmedQuery) {
      fetch(nasaSearch_api)
        .then((r) => r.json())
        .then((data) => setResults(data.collection.items.slice(0, 5)));
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

  console.log("results: ", results);
  console.log("query: ", query);
  console.log("displayedResults: ", displayedResults);

  //==================== STYLES ================================================
  const outerPageStyles = {
    // backgroundImage: `url(${backgroundTwo})`,
    // backgroundSize: "contain",
    // backgroundBlendMode: "lighten",
    display: "flex",
    //height: "100vh",
    justifyContent: "flex-start",
    backgroundColor: "#E9F1F0",
  };
  const wholeFormStyles = {
    backgroundImage: `url(${backgroundThree})`,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    height: "100vh",
    width: "45rem",
    //borderRight:
  };

  const displayStyles = {
    color: "white",
    width: "1fr",
    backgroundImage: `url(${backgroundTwo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexGrow: "2",
    textAlign: "center",
    fontSize: "1rem",
    // fontSize: "",
  };

  const displayHeaderStyles = {
    fontSize: "4rem",
    textShadow: "2px 2px 0px #222",
    // color: "",
    // color: "",
  };

  const logoStyles = {
    color: "#B52006",
    fontWeight: "800",
    fontSize: "5rem",
  };
  //==========================================================================

  return (
    <div className="outer" style={outerPageStyles}>
      <div id="about" style={wholeFormStyles}>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            value={query}
            onChange={handleSearchChange}
          />
          <input type="submit" name="" id="" />
        </form>
      </div>
      <div className="display-section" style={displayStyles}>
        <h2 style={displayHeaderStyles}>
          <span style={logoStyles}>NASA</span> Images
        </h2>
        <div className="display-grid">{displayedResults}</div>
      </div>
    </div>
  );
}

export default Media;
