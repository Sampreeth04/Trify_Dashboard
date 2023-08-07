// useRoutingMachine.js
import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";

const useRoutingMachine = (pathLatList, pathLongList) => {
  const [routingMachine, setRoutingMachine] = useState(null);

  useEffect(() => {
    if (pathLatList.length > 0 && pathLongList.length > 0) {
      const waypoints = pathLatList.map((lat, index) =>
        L.latLng(lat, pathLongList[index])
      );

      const instance = L.Routing.control({
        waypoints,
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

      setRoutingMachine(instance);

      return () => {
        instance.getPlan().setWaypoints([]); // Cleanup when unmounting
      };
    }
  }, [pathLatList, pathLongList]);

  return routingMachine;
};

export default useRoutingMachine;
