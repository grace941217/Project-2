import React, { useState, useEffect } from "react";
//import env from "react-dotenv";
//import { configKeys } from "./config";

function SatPics() {
  const [image, setImage] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [address, setAddress] = useState("");
  const [imageDate, setImageDate] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  //============= API DATA =======================================
  // const nasaKey = configKeys.NASA_API_KEY;
  // const geoKey = configKeys.GMAPS_GEO_KEY;
  const nasaKey = process.env.REACT_APP_NASA_API_KEY;
  const geoKey = process.env.REACT_APP_GMAPS_GEO_KEY;
  console.log("geoKey: ", process.env.REACT_APP_GMAPS_GEO_KEY);
  console.log("nasaKey: ", process.env.REACT_APP_NASA_API_KEY);
  // console.log("nasaKey: ", configKeys.NASA_API_KEY);

  const nasa_api = `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=${imageDate}&&dim=0.10&api_key=${nasaKey}`;
  const geocoding_api = `https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${address}`;
  const geocoding_headers = {
    "X-RapidAPI-Key": geoKey,
    "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
  };

  //============= API CALLS ========================================
  useEffect(() => {
    const configObj = {
      method: "GET",
      headers: geocoding_headers,
    };
    if (address) {
      fetch(geocoding_api, configObj)
        .then((r) => r.json())
        .then((data) => {
          console.log("data.results[0]: ", data);
          const locationData = data.results[0].geometry.location;
          console.log(locationData);
          setLongitude(locationData.lng);
          setLatitude(locationData.lat);
        });
    }
  }, [address]);

  useEffect(() => {
    if (longitude && latitude) {
      fetch(nasa_api)
        .then((r) => r.json())
        .then((data) => setImage(data.url));
    }
  }, [longitude, latitude, imageDate]);

  //======= LISTENERS ====================================
  const addressClick = () => {
    //console.log("here");
    setAddress(addressInput);
  };

  const inputChange = (e) => {
    setAddressInput(e.target.value);
  };

  const imageDateChange = (e) => {
    setImageDate(e.target.value);
  };

  console.log("address: ", address);
  console.log("imageDate: ", imageDate);
  //============= RETURN =======================================
  return (
    <div>
      {/* <NavBar onChangePage={setPage} /> */}
      <img src={image} alt="" className="sat-pic" />
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Number Street, City, StateCode"
        value={addressInput}
        onChange={inputChange}
      />
      <input
        type="text"
        name="date"
        id="date"
        placeholder="YYYY-MM-DD"
        value={imageDate}
        onChange={imageDateChange}
      />
      <button onClick={addressClick}>set address</button>
      {/* <Routes>
          <Route path="/about/*" element={<About />} />
          <Route path="/projects/:id/" element={<ProjectDetail />} />
          <Route path="/projects/" element={<ProjectList />} />
  
          <Route path="/" element={<Home />} />
        </Routes> */}
      {/* {getCurrentPage()} */}
    </div>
  );
}

export default SatPics;

//========= DB.JSON data =====================
// const myTodos = [
//   { id: 1, description: "Create a new todo", completed: false },
//   { id: 2, description: "Update an existing todo", completed: false },
//   { id: 3, description: "Delete an existing todo", completed: false },
// ];
// console.log(JSON.stringify(yTodos));
