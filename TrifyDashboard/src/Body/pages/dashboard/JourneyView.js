import React from "react";
import "leaflet/dist/leaflet.css";
import "../../../App.css";
import { useContext } from "react";

import { useState } from "react";

import MapComponent from "../../../components/MapComponents/JourneyComponents/MapComponent";
import Timeline from "../../../components/MapComponents/JourneyComponents/TimelineComponent";

const JourneyView = () => {
  const [date, setDate] = useState("");
  const [journey, setJourney] = useState(0);
  const [journeyCount, setJourneyCount] = useState(0);
  const [bikeID, setBikeID] = useState(1);

  return (
    <div>
      <div className="map-container">
        <MapComponent
          date={date}
          journey={journey}
          setJourneyCount={setJourneyCount}
          bikeID={bikeID}
        />
      </div>
      <div className="timeline-container">
        <Timeline
          setDate={setDate}
          setJourney={setJourney}
          journeyCount={journeyCount}
          setBikeID={setBikeID}
        />
      </div>
      {/* <StaticComponent /> */}
    </div>
  );
};

export default JourneyView;
