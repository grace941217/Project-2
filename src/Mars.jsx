import React, { useState, useEffect } from "react";
import MarsPic from "./MarsPic";

function Mars({ user, loggedIn }) {
  const [formData, setFormData] = useState({
    earthDate: "2015-6-3",
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
  return (
    <>
      <h1>Mars Weather</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="date">Earth Date </label>
        <input
          type="text"
          name="earthDate"
          id="date"
          placeholder="YYYY-MM-DD"
          value={formData.earthDate}
          onChange={handleChange}
        />
        <select
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
          <option value="minites">Mini Thermal Emission Spectrometer</option>
        </select>
        <button type="submit">Search Rover's Catalogue</button>
      </form>
      <div>
        {results.map((image) => (
          <MarsPic image={image} key={image.id} />
        ))}
      </div>
    </>
  );
}

export default Mars;
