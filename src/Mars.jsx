import React, { useState, useEffect } from "react";
import MarsPic from "./MarsPic";
import background from "./images/mars-background.jpg";

function Mars({ user, loggedIn, allUsers }) {
  const [formData, setFormData] = useState({
    earthDate: "",
    camera: "",
  });
  const [results, setResults] = useState([]);
  console.log("formData: ", formData);
  const nasaKey = process.env.REACT_APP_NASA_API_KEY;
  //const marsWeatherUrl = `https: //api.nasa.gov/insight_weather/?api_key=${nasaKey}&feedtype=json&ver=1.0`;
  const marsCamUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formData.earthDate}&camera=${formData.camera}&api_key=${nasaKey}`;
  const marsNoCamUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formData.earthDate}&api_key=${nasaKey}`;
  //   const marsPicsUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${nasaKey}`;

  //Need an api url for search with a camera value and one for a search without.
  //a blank value for camera param will give no data back
  //   useEffect(() => {
  //     if (formData.earthDate)
  //       fetch(formData.camera ? marsCamUrl : marsNoCamUrl)
  //         .then((r) => r.json())
  //         .then((data) => console.log(data));
  //   }, []);
  //const geoKey = process.env.REACT_APP_GMAPS_GEO_KEY;

  const handleChange = (e) => {
    console.log("datechange");
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    //if (formData.earthDate)
    fetch(formData.camera ? marsCamUrl : marsNoCamUrl)
      .then((r) => r.json())
      .then((data) => setResults(data.photos));
  };
  console.log("results: ", results);
  //========= STYLES ========================================
  const wholePageStyles = {
    padding: "2rem",
    // backgroundColor: "#333",
    backgroundImage: `url(${background})`,
    //height: "200vh",
    backgroundAttachment: "fixed",
    color: "rgb(225, 225, 225)",
  };

  const titleStyles = {
    fontSize: "3rem",
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
    marginBottom: "5rem",
    // border: "2px solid white",
  };
  const labelStyles = {
    display: "flex",
    flexDirection: "column",
  };
  const inputStyles = {
    width: "20rem",
    marginTop: "0.5rem",
    padding: "0.5rem 0.8rem",
    outline: "none",
    border: "none",
    backgroundColor: "rgb(120, 120, 120)",
    color: "rgb(219, 219, 219)",
  };

  const searchButtonStyles = {
    width: "10rem",
    padding: "0.5rem 0.8rem",
    backgroundColor: "#D9AD7C",
    border: "none",
    borderRadius: "15px",
    fontWeight: "bold",
  };

  const marsPicContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 30fr)",
    gap: "4rem",
    //aligning items inside the grid segments
    justifyItems: "center",
    alignItems: "center",
    //aligning the whole grid inside its container
    justifyContent: "center",
  };

  //===========================================================
  return (
    <div style={wholePageStyles}>
      <div>
        <h1 style={titleStyles}>Mars Rover Images</h1>
        <form action="" onSubmit={handleSubmit} style={formStyles}>
          <label htmlFor="date" style={labelStyles}>
            Earth Date
            <input
              style={inputStyles}
              type="text"
              name="earthDate"
              id="date"
              placeholder="YYYY-MM-DD"
              value={formData.earthDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="camera" style={labelStyles}>
            Camera Select
            <select
              style={inputStyles}
              name="camera"
              id="camera"
              value={formData.camera}
              onChange={handleChange}
            >
              <option value="">All Cameras</option>
              <option value="fhaz">Front Hazard Avoidance</option>
              <option value="rhaz">Rear Hazard Avoidance</option>
              <option value="mast">Mast</option>
              <option value="chemcam">Chemistry</option>
              <option value="mahli">Mars Hand Lins Imager</option>
              <option value="mardi">Mars Descent Imager</option>
              <option value="navcam">Navigation</option>
              <option value="pancam">Panoramic</option>
              <option value="minites">
                Mini Thermal Emission Spectrometer
              </option>
            </select>
          </label>
          <button type="submit" style={searchButtonStyles}>
            Search Rover's Catalogue
          </button>
        </form>
      </div>
      <div className="mars-pic-container" style={marsPicContainer}>
        {results.map((image) => (
          <MarsPic
            image={image}
            key={image.id}
            user={user}
            allUsers={allUsers}
          />
        ))}
      </div>
    </div>
  );
}

export default Mars;
