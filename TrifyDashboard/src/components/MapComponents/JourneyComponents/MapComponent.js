import React, { useLayoutEffect } from "react";

import "leaflet/dist/leaflet.css";
import "../../cssFiles/Map.css";

import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import MarkerComponent from "../MarkerComponent";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import { useState, useEffect, useRef, useMemo } from "react";

import RoutingMachine from "../RoutingMachine";

import { Polyline } from "react-leaflet";

// import { useBeforeRender } from "/Users/sampreethimmidisetty/Desktop/Trify/Python/TrifyDjango/client/trify-client/src/util/utils.js";

import moment from "moment";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

let bikeIcon = L.icon({
  iconUrl: require("../bike.png"),
  // shadowUrl: require("./components/bike.png"),
  iconSize: new L.Point(120, 85),
});

L.Marker.prototype.options.icon = bikeIcon;

const MapComponent = ({ date, journey, setJourneyCount, bikeID }) => {
  const bikeData = [
    {
      latitude: 35.63982029,
      longitude: 139.61310521,
      timestamp: "2017-01-12 17:36:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64041189,
      longitude: 139.61263022,
      timestamp: "2017-01-12 17:37:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64111181,
      longitude: 139.61261769,
      timestamp: "2017-01-12 17:38:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64117014,
      longitude: 139.61261768,
      timestamp: "2017-01-12 17:38:10",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64172841,
      longitude: 139.61261766,
      timestamp: "2017-01-12 17:38:55",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64196172,
      longitude: 139.61278013,
      timestamp: "2017-01-12 17:39:20",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64217835,
      longitude: 139.61204269,
      timestamp: "2017-01-12 17:40:15",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64230334,
      longitude: 139.61168021,
      timestamp: "2017-01-12 17:40:45",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64244499,
      longitude: 139.6117302,
      timestamp: "2017-01-12 17:41:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64275329,
      longitude: 139.61180518,
      timestamp: "2017-01-12 17:41:30",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6429616,
      longitude: 139.61174267,
      timestamp: "2017-01-12 17:41:50",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64300325,
      longitude: 139.61124271,
      timestamp: "2017-01-12 17:42:25",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64300325,
      longitude: 139.61124271,
      timestamp: "2017-01-12 18:00:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64300325,
      longitude: 139.61124271,
      timestamp: "2017-01-12 19:00:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64300325,
      longitude: 139.61124271,
      timestamp: "2017-01-12 20:00:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64300325,
      longitude: 139.61124271,
      timestamp: "2017-01-12 21:00:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64300325,
      longitude: 139.61124271,
      timestamp: "2017-01-12 22:00:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64300325,
      longitude: 139.61124271,
      timestamp: "2017-01-12 23:00:00",
      journey: 1,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6433782,
      longitude: 139.61060525,
      timestamp: "2017-01-12 03:00:00",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6433782,
      longitude: 139.61060525,
      timestamp: "2017-01-12 04:00:00",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6433782,
      longitude: 139.61060525,
      timestamp: "2017-01-12 05:00:00",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6433782,
      longitude: 139.61060525,
      timestamp: "2017-01-12 06:00:00",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6433782,
      longitude: 139.61060525,
      timestamp: "2017-01-12 07:00:00",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6433782,
      longitude: 139.61060525,
      timestamp: "2017-01-12 08:00:00",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6433782,
      longitude: 139.61060525,
      timestamp: "2017-01-12 09:00:00",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6433782,
      longitude: 139.61060525,
      timestamp: "2017-01-12 10:00:00",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64374485,
      longitude: 139.61175514,
      timestamp: "2017-01-12 10:00:30",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64351987,
      longitude: 139.61175515,
      timestamp: "2017-01-12 10:00:40",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6429616,
      longitude: 139.61174267,
      timestamp: "2017-01-12 10:00:55",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64275329,
      longitude: 139.61180518,
      timestamp: "2017-01-12 10:01:05",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64244499,
      longitude: 139.6117302,
      timestamp: "2017-01-12 10:01:15",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64230334,
      longitude: 139.61168021,
      timestamp: "2017-01-12 10:01:20",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64213668,
      longitude: 139.61150523,
      timestamp: "2017-01-12 10:01:30",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64180338,
      longitude: 139.61143025,
      timestamp: "2017-01-12 10:01:40",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64173671,
      longitude: 139.61045534,
      timestamp: "2017-01-12 10:02:10",
      journey: 2,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64173671,
      longitude: 139.61045534,
      timestamp: "2017-01-12 11:00:00",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64173671,
      longitude: 139.61045534,
      timestamp: "2017-01-12 12:00:00",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64173671,
      longitude: 139.61045534,
      timestamp: "2017-01-12 13:00:00",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64173671,
      longitude: 139.61045534,
      timestamp: "2017-01-12 14:00:00",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64173671,
      longitude: 139.61045534,
      timestamp: "2017-01-12 14:30:00",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6417367,
      longitude: 139.61026785,
      timestamp: "2017-01-12 14:30:05",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6417367,
      longitude: 139.60994288,
      timestamp: "2017-01-12 14:30:15",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64221998,
      longitude: 139.60990536,
      timestamp: "2017-01-12 14:30:30",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64221997,
      longitude: 139.6094679,
      timestamp: "2017-01-12 14:30:40",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6422283,
      longitude: 139.60921792,
      timestamp: "2017-01-12 14:30:50",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64226162,
      longitude: 139.60874296,
      timestamp: "2017-01-12 14:31:05",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64252826,
      longitude: 139.60878044,
      timestamp: "2017-01-12 14:31:15",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64272824,
      longitude: 139.60879293,
      timestamp: "2017-01-12 14:31:25",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64282823,
      longitude: 139.60879293,
      timestamp: "2017-01-12 14:31:30",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64314486,
      longitude: 139.60883041,
      timestamp: "2017-01-12 14:31:40",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64322819,
      longitude: 139.6088304,
      timestamp: "2017-01-12 14:31:45",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6434115,
      longitude: 139.6088304,
      timestamp: "2017-01-12 14:31:50",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64389478,
      longitude: 139.60881787,
      timestamp: "2017-01-12 14:32:05",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64417808,
      longitude: 139.60879286,
      timestamp: "2017-01-12 14:32:15",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6446197,
      longitude: 139.60874285,
      timestamp: "2017-01-12 14:32:30",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64471969,
      longitude: 139.60873034,
      timestamp: "2017-01-12 14:32:35",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64498633,
      longitude: 139.60870533,
      timestamp: "2017-01-12 14:32:45",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64571958,
      longitude: 139.60861781,
      timestamp: "2017-01-12 14:33:05",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64576958,
      longitude: 139.60860531,
      timestamp: "2017-01-12 14:33:10",
      journey: 3,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64612787,
      longitude: 139.60858029,
      timestamp: "2017-01-12 14:33:20",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64647783,
      longitude: 139.60854278,
      timestamp: "2017-01-12 14:33:30",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64655283,
      longitude: 139.60854278,
      timestamp: "2017-01-12 14:33:35",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64711943,
      longitude: 139.60846776,
      timestamp: "2017-01-12 14:33:55",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64733607,
      longitude: 139.60845525,
      timestamp: "2017-01-12 14:34:05",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6474444,
      longitude: 139.60844274,
      timestamp: "2017-01-12 14:34:10",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6477527,
      longitude: 139.60840523,
      timestamp: "2017-01-12 14:34:20",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64787768,
      longitude: 139.60839273,
      timestamp: "2017-01-12 14:34:25",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.647986,
      longitude: 139.60839272,
      timestamp: "2017-01-12 14:34:30",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6486526,
      longitude: 139.6083177,
      timestamp: "2017-01-12 14:34:50",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64895256,
      longitude: 139.60830518,
      timestamp: "2017-01-12 14:35:00",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64912755,
      longitude: 139.60830518,
      timestamp: "2017-01-12 14:35:05",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64946918,
      longitude: 139.60834266,
      timestamp: "2017-01-12 14:35:15",
      journey: 4,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.64965249,
      longitude: 139.60841764,
      timestamp: "2017-01-12 14:35:25",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65005245,
      longitude: 139.60845512,
      timestamp: "2017-01-12 14:35:40",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65062739,
      longitude: 139.60845509,
      timestamp: "2017-01-12 14:36:00",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65120233,
      longitude: 139.60843007,
      timestamp: "2017-01-12 14:36:20",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65200224,
      longitude: 139.60845503,
      timestamp: "2017-01-12 14:36:45",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.6520689,
      longitude: 139.60846753,
      timestamp: "2017-01-12 14:36:50",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65254385,
      longitude: 139.6085425,
      timestamp: "2017-01-12 14:37:05",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65286882,
      longitude: 139.60859248,
      timestamp: "2017-01-12 14:37:15",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65318545,
      longitude: 139.60865496,
      timestamp: "2017-01-12 14:37:25",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65326044,
      longitude: 139.60867995,
      timestamp: "2017-01-12 14:37:30",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65389371,
      longitude: 139.60877992,
      timestamp: "2017-01-12 14:37:50",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65397704,
      longitude: 139.60879241,
      timestamp: "2017-01-12 14:37:55",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65418535,
      longitude: 139.6088424,
      timestamp: "2017-01-12 14:38:05",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65482695,
      longitude: 139.60912985,
      timestamp: "2017-01-12 14:38:25",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65529357,
      longitude: 139.60924231,
      timestamp: "2017-01-12 14:38:40",
      journey: 5,
      batteryPercentage: "96%",
    },
    {
      latitude: 35.65537689,
      longitude: 139.60926731,
      timestamp: "2017-01-12 14:38:45",
      journey: 5,
      batteryPercentage: "96%",
    },
  ];

  // fetch(
  //   "/Users/sampreethimmidisetty/Desktop/Trify/Python/TrifyDjango/client/trify-client/src/data/formatted_data.json"
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Here, 'data' will contain your JSON data in JavaScript object format
  //     console.log(data);
  //     bikeData = data;

  //     // You can now use the 'data' object to work with the JSON data
  //     // For example, you can access individual properties like data[i].latitude, data[i].longitude, etc.
  //   })
  //   .catch((error) => console.error("Error fetching JSON file:", error));

  const [pathArrayLat, setPathArrayLat] = useState([]);
  const [pathArrayLong, setPathArrayLong] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const newLatitudes = [];
    const newLongitudes = [];

    const uniqueJourneys = new Set(bikeData.map((data) => data.journey));
    setJourneyCount(uniqueJourneys);

    if (journey === -1) {
      console.log(journey);
      uniqueJourneys.forEach((journeyVal) => {
        const latitudesForJourney = bikeData
          .filter((data) => data.journey === journeyVal)
          .map((data) => data.latitude);
        const longitudesForJourney = bikeData
          .filter((data) => data.journey === journeyVal)
          .map((data) => data.longitude);

        newLatitudes.push(latitudesForJourney);
        newLongitudes.push(longitudesForJourney);
        console.log("Hereaewf");
      });
    } else {
      console.log(journey);
      for (let i = 0; i < bikeData.length; i++) {
        if (bikeData[i].journey === journey + 1) {
          newLatitudes.push(bikeData[i].latitude);
          newLongitudes.push(bikeData[i].longitude);
        }
      }
    }

    setPathArrayLat(newLatitudes);
    setPathArrayLong(newLongitudes);
    setKey((prevKey) => prevKey + 1);
  }, [journey]);

  useMemo(() => {
    // This useEffect runs only once during the initial render
    // You can put any initial setup code here if needed.
    // Example: Fetch data from an API, initialize variables, etc.
  }, []);

  return (
    <div className="Map Component">
      <div style={{ height: "1400px", width: "100%" }}>
        <MapContainer
          center={[35.64174502, 139.60923044]}
          zoom={14}
          scrollWheelZoom={false}
          style={{ height: "100%", minHeight: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {journey !== -1 &&
            pathArrayLat.length > 0 &&
            pathArrayLong.length > 0 && (
              <RoutingMachine
                latList={pathArrayLat}
                longList={pathArrayLong}
                key={key}
              />
            )}

          {journey === -1 &&
            pathArrayLat.length > 0 &&
            pathArrayLong.length > 0 &&
            pathArrayLat.map((latitudes, index) => (
              <RoutingMachine
                latList={latitudes}
                longList={pathArrayLong[index]}
                key={key}
              />
            ))}

          {/* {journey !== -1 &&
            pathArrayLat.length > 0 &&
            pathArrayLong.length > 0 && (
              <Polyline
                positions={pathArrayLat.map((lat, index) => [
                  lat,
                  pathArrayLong[index],
                ])}
                color="orange"
              />
            )}

          {journey === -1 &&
            pathArrayLat.length > 0 &&
            pathArrayLong.length > 0 &&
            pathArrayLat.map((latitudes, journeyIndex) => (
              <Polyline
                positions={latitudes.map((lat, index) => [
                  lat,
                  pathArrayLong[journeyIndex][index],
                ])}
                color="orange"
                key={journeyIndex}
              />
            ))} */}

          {/* {pathArrayLat.length > 0 &&
            pathArrayLong.length > 0 &&
            [...Array(bikeData.length)].map((x, i) => {
              return (
                <>
                  <MarkerComponent
                    latitude={bikeData[i].latitude}
                    longitude={bikeData[i].longitude}
                    timestamp={bikeData[i].timestamp}
                    batteryPercentage={bikeData[i].batteryPercentage}
                  ></MarkerComponent>
                </>
              );
            })} */}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
