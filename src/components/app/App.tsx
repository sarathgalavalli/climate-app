import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});

  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9c5e54e0a5ff75cc14e0f29bef86ee39`;

  const searchLocation = () => {
    if (latitude && longitude) {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log("data", res.data);
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
            type="text"
            placeholder="Enter Longitude"
          />
          <input
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
            type="text"
            placeholder="Enter Latitude"
          />
        </div>
        <button onClick={() => searchLocation()}>{"Search"}</button>
      </div>
    </div>
  );
}

export default App;
