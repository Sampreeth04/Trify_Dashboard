import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

import { useState, useEffect } from "react";

const createRoutineMachineLayer = (props) => {
  // const [latList, setLatList] = useState([]);
  // const [longList, setLongList] = useState([]);

  // useEffect(() => {
  //   setLatList(props.pathLatList);
  //   setLongList(props.pathLongList);
  // });

  let waypoints = [];
  console.log(props.latList.length);
  for (let i = 0; i < props.latList.length; i++) {
    waypoints.push(L.latLng(props.latList[i], props.longList[i]));
  }

  const instance = L.Routing.control({
    // waypoints: [
    //   L.latLng(props.startLat, props.startLong),
    //   //   L.latLng(12.91545, 77.6299),
    //   //   L.latLng(12.91545, 77.63629),
    //   //   L.latLng(12.91605, 77.64546),
    //   //   L.latLng(12.91945, 77.64746),
    //   //   L.latLng(12.91736, 77.63012),

    //   //   L.latLng(props.endLat, props.endLong),
    // ],
    waypoints: waypoints,
    lineOptions: {
      styles: [{ color: "#ff8c00", weight: 4 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
