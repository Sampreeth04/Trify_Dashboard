import React, { useEffect, useRef } from "react";
import { Chrono } from "react-chrono";

const TimelineBarComponent = () => {
  const items = [
    {
      title: "Start",
      cardTitle: "Pearl Harbor",
    },
    {
      title: "Journey 1",
    },
    {
      title: "Journey 2",
    },
    {
      title: "Journey 3",
    },
    {
      title: "Journey 4",
    },
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Timeline scrolled");
    };

    if (timelineRef.current) {
      timelineRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      style={{ width: "550px", height: "200px", overflow: "auto" }}
      ref={timelineRef}
    >
      <Chrono
        items={items}
        mode="HORIZONTAL"
        theme={{
          primary: "orange",
          secondary: "orange",
          cardBgColor: "yellow",
          titleColor: "black",
          titleColorActive: "black",
        }}
        scrollable={{ scrollbar: false }}
      />
    </div>
  );
};

export default TimelineBarComponent;
