import React from "react";
import "leaflet/dist/leaflet.css";

import { useState } from "react";
import { addDays } from "date-fns";

// import MapComponentAggregate from "../components/MapComponentAggregate";
import MapComponentAggregate from "../../../components/MapComponents/AggregateComponents/MapComponentAggregate";
// import TimelineAggregate from "../components/TimelineComponentAggregate";
import TimelineAggregate from "../../../components/MapComponents/AggregateComponents/TimelineComponentAggregate";

const AggregateView = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);
  const [journey, setJourney] = useState(0);
  const [journeyCount, setJourneyCount] = useState(0);
  const [bikeID, setBikeID] = useState(1);

  return (
    <div>
      <div className="map-container">
        <MapComponentAggregate dateRange={dateRange} />
      </div>
      <div className="timeline-container">
        <TimelineAggregate setDateRange={setDateRange} />
      </div>
    </div>
  );
};

export default AggregateView;
