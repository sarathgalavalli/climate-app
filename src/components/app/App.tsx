import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import weather from "../../assets/weather.png";

function App() {
  const [data, setData] = useState<any>({});

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
      console.log("need both latitude and longitude to search");
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

          <div className="widgets">
            <div className="widget">
            <div className="widget-header">
                <h4>Terrain</h4>
              </div>
              <div className="widget-content">
              <div>Type: {data?.weather[0]?.main}</div>
              <div>Description: {data?.weather[0]?.description}</div>
              </div>
            </div>

            <div className="widget">
            <div className="widget-header">
                <h4>Weather</h4>
              </div>
              <div className="widget-content">
              <div>Humidity: {data?.main?.humidity}</div>
              <div>Pressure:{data?.main?.pressure}</div>
              <div>Sea Level: {data?.main?.sea_level}</div>
              <div>Ground: Level: {data?.main?.grnd_level}</div>
              </div>
            </div>

            <div className="widget">
              <div className="widget-header">
                <h4>Wind</h4>
              </div>
              <div className="widget-content">
                <div>Speed: {data?.wind?.speed} kmph</div>
                <div>Deg: {data?.wind?.deg}&#176;</div>
                <div>Gust: {data?.wind?.gust} mph</div>
              </div>
            </div>

            <div className="widget">
            <div className="widget-header">
                <h4>Country</h4>
              </div>
              <div className="widget-content">
              <div>Country: {data?.sys?.country}</div>
              <div>Sunset: {data?.sys?.sunrise}</div>
              <div>Sunrise: {data?.sys?.sunset}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
