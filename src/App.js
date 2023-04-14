import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

const URL = "http://localhost:3000";

function App() {
  const [sightings, setSightings] = useState([]);
  const [detailMode, setDetailMode] = useState(false);
  const [sightingDeets, setSightingDeets] = useState(false);

  useEffect(() => {
    Axios.get(`${URL}/sightings`).then((data) => {
      console.log(data);
      setSightings(data.data);
    });
  }, []);

  function handleClick(e) {
    Axios.get(`{URL}/sightings`).then((data) => {
      setSightingDeets(data.data);
      setDetailMode(true);
      alert("clicked");
    });
  }

  let sightingsItems = sightings.map((item, counter) => {
    return (
      <p
        onClick={() => {
          handleClick(counter);
        }}
      >
        {item.YEAR} - {item.SEASON} - {item.STATE}
      </p>
    );
  });

  let sightingDeetsItems = (
    <div>
      <button onClick={() => setDetailMode(!detailMode)}>Back</button>
      <p>
        Year: {sightingDeets.YEAR} <br />
        Season: {sightingDeets.SEASON} <br />
        Time and Conditions: {sightingDeets.TIME_AND_CONDITIONS} <br />
        State: {sightingDeets.STATE} <br />
        Country: {sightingDeets.COUNTRY} <br />
        Location Details: {sightingDeets.LOCATION_DETAILS} <br />
        Observed: {sightingDeets.OBSERVED} <br />
        Other Witnesses: {sightingDeets.OTHER_WITNESSES} <br />
        Report Class: {sightingDeets.REPORT_CLASS} <br />
        Report Number: {sightingDeets.REPORT_NUMBER} <br />
      </p>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h2>{detailMode ? sightingDeetsItems : sightingsItems}</h2>
      </header>
    </div>
  );
}

export default App;
