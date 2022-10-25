import React, { useState, useEffect } from "react";

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

  const wholePageStyles = {};

  //==========================================================================

  return (
    <div id="about" style={wholePageStyles}>
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
      <h2>Render NASA Images Here</h2>
      <div>{displayedResults}</div>
    </div>
  );
}

export default Media;
