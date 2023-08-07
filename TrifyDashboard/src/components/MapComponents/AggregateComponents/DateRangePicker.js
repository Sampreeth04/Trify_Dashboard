import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./DateRangePicker.css";
import { DateRangePicker } from "react-date-range";

import { addDays } from "date-fns";
import { useState } from "react";

import React from "react";

const DateRangePickerComponent = ({ setDateRange }) => {
  const setStates = (item) => {
    setState([item.selection]);
    setDateRange([item.selection]);
  };

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  // console.log(state);

  return (
    <div style={{ width: "fit-content", height: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          color: "orange", // Change this color to your desired color
          fontSize: "18px", // Adjust the font size as needed
          fontWeight: "bold", // Add other text styles as needed
          padding: "8px",
        }}
      >
        <div wrapperClassName="datepicker">
          <DateRangePicker
            onChange={(item) => setStates(item)}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="vertical"
            rangeColors={["orange", "orange", "#FFAF47", "#FFCC57"]}
            maxDate={addDays(new Date(), 0)}
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePickerComponent;

// import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

// export default function DateRangePickerComponent() {
//   const dateRangePickerStyles = {
//     "& .MuiPickersDateRangePickerInput-root": {
//       backgroundColor: "orange", // Change the background color to your desired color
//     },
//     "& .MuiPickersDay-daySelected": {
//       backgroundColor: "orange", // Change the selected date background color to your desired color
//       color: "orange", // Change the text color for selected date
//     },
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["DateRangePicker"]}>
//         <DateRangePicker
//           localeText={{ start: "Initial Date", end: "Final Date" }}
//           style={dateRangePickerStyles}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
