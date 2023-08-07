import React, { useEffect } from "react";

import "../../cssFiles/Timeline.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles.scss";
// import "../cssFiles/bootstrap-iso.css";
// import "../cssFiles/_card.scss";

import logo from "../bike.png";
import DateDropdown from "./DatePicker";
import TimelineChartComponent from "./TimelineChartComponent";

import TextField from "@mui/material/TextField";

import { useState } from "react";

const Timeline = ({ setDate, setJourney, journeyCount, setBikeID }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    console.log(selectedDate);
  });

  return (
    <div className="timeline">
      <div
        class="card text-white bg-light mb-3 border-0"
        style={{ padding: "10px" }}
        // style={{ maxWidth: "18rem;" }}
      >
        <div
          class="card-header"
          style={{
            color: "orange",
            fontSize: 30,
            marginLeft: "0px",
            display: "flex",
            justifyContent: "center",
            padding: "25px",
            fontFamily: "unset",
          }}
        >
          {/* <img
            src={logo}
            style={{
              width: "35%",
              height: "35%",
              objectFit: "contain",
              textAlign: "left",
            }}
          /> */}
          Journey Timeline
        </div>
        <div
          class="card-body"
          // style={{
          //   display: "flex",
          //   justifyContent: "flex-start",
          //   alignItems: "flex-start",
          //   flexDirection: "column",
          // }}
        >
          {/* <div style={{ flex: "none" }}>
            <DateDropdown selectDate={setDate} />
          </div> */}

          {/* <h3 style={{ color: "orange" }}>Bike Journey View</h3> */}
          <br />

          <div
            style={{
              display: "flex",
            }}
          >
            <DateDropdown selectDate={setDate} />
            <TextField
              id="outlined-basic"
              label="Bike ID"
              variant="outlined"
              defaultValue={1}
              onChange={setBikeID}
            />
          </div>

          <br />
          <br />
          <div>
            {/* <TimelineBarComponent></TimelineBarComponent> */}
            <TimelineChartComponent
              setJourney={setJourney}
              journeyCount={journeyCount}
            />
          </div>
        </div>

        {/* <div class="card-body">
          <h5
            class="card-title"
            style={{
              color: "orange",
              //   display: "flex",
              margin: "30px 0",
              width: "500px",
              fontSize: 30,
              //   flexDirection: "row",
              //   justifyContent: "space-between",
            }}
          >
            Date:
            <DateDropdown selectDate={setDate} />
          </h5>
        </div>
        <TimelineBarComponent></TimelineBarComponent> */}
      </div>
    </div>
  );
};

export default Timeline;
