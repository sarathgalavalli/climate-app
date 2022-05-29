import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Widgets } from "../widgets/Widgets";

function App() {
  const [data, setData] = useState<any>(undefined);

  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9c5e54e0a5ff75cc14e0f29bef86ee39`;

  const searchLocation = () => {
    if (latitude && longitude) {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          console.log("data", res.data);
        })
        .catch((e) => {
          alert(
            `Couldn't find a region with given latitude and longitude details`
          );
        });
      setLatitude("");
      setLongitude("");
    } else {
      alert(`Please Enter both latitude and longitude to search`);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <div className="search">
          <input
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
            type="number"
            placeholder="Enter Longitude"
          />
          <input
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
            type="number"
            placeholder="Enter Latitude"
          />
        </div>
        <button onClick={() => searchLocation()}>{"Search"}</button>
      </div>
      {data && (
        <div className="weather-data">
          <div className="main">
            <h2>{data?.main?.temp}&#176;</h2>
            <h4>Feels like: {data?.main?.feels_like}&#176;</h4>
            H: {data?.main?.temp_max} L: {data?.main?.temp_min}
          </div>

          <Widgets data={data}/>
        </div>
      )}
    </div>
  );
}

export default App;
