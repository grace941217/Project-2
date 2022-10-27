import React, { useState, useEffect } from "react";
import background from "./images/login-page-1.jpg";
import backgroundTwo from "./images/satellite-2.jpg";

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

  //================= STYLES ========================================
  // PADDING IN TEXT INPUTS, BACKGROUND-COLOR IN PSUEDO CLASSES DONT WORK IN REACT
  const wholePageStyles = {
    backgroundColor: "#E9F1F0",
    backgroundImage: `url(${backgroundTwo})`,
    // backgroundImage: `url(${background})`,
    // backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    height: "100vh",
    //======
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // flexGrow: "2",
    // textAlign: "center",
    // fontSize: "1rem",
    // fontSize: "",
    // height: "100%",
    //======
  };

  const titleStyles = {
    color: "gold",
    // color: "rgb(250, 250, 250)",
    margin: "0",
    fontSize: "7rem",
    textShadow: "5px 5px 5px #222",
    fontStyle: "italic",
    // textAlign: "left",
  };
  const subheaderStyles = {
    margin: "0",
    color: "rgb(250, 250, 250)",
    fontSize: "3rem",
    textShadow: "5px, 5px, 0, #222",
    // textAlign: "left",
  };

  const formTextStyles = {
    // backgroundColor: "rgba(60, 60, 60, 0.7)",
    padding: "3rem",
  };

  const mainBodyStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const formAreaStyles = {
    margin: "6rem",
    backgroundColor: "rgba(60, 60, 60, 0.7)",
    //paddingLeft: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //width: "30rem",
    height: "40rem",
    textAlign: "center",
  };

  const inputStyles = {
    border: "none",
    borderRadius: "10px",
    fontSize: "1.2rem",
    margin: "1rem",
    // padding: "0.5rem, 1.4rem",
    width: "18rem",
  };

  const buttonStyles = {
    margin: "1rem",
    padding: "0.8rem 1.8rem",
    borderRadius: "20px",
    backgroundColor: "gold",
    fontSize: "1.2rem",
  };

  const imageAreaStyles = {
    //border: "2px solid #444",
    paddingRight: "6rem",
    width: "50rem",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "none",
  };

  const imageStyles = {
    width: "100%",
  };
  //============= RETURN =======================================
  return (
    <div style={wholePageStyles}>
      {/* <NavBar onChangePage={setPage} /> */}
      <div style={mainBodyStyles}>
        <div className="form-area" style={formAreaStyles}>
          <div style={formTextStyles}>
            <h1 style={titleStyles}>Landsat</h1>
            <p style={subheaderStyles}> Satellite Imagery</p>
          </div>
          <input
            style={inputStyles}
            type="text"
            name="address"
            id="address"
            placeholder="Number Street, City, StateCode"
            value={addressInput}
            onChange={inputChange}
          />
          <input
            style={inputStyles}
            type="text"
            name="date"
            id="date"
            placeholder="YYYY-MM-DD"
            value={imageDate}
            onChange={imageDateChange}
          />
          <button onClick={addressClick} style={buttonStyles}>
            set address
          </button>
        </div>
        <div style={imageAreaStyles}>
          <img src={image} alt="" className="sat-pic" style={imageStyles} />
        </div>
      </div>
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
