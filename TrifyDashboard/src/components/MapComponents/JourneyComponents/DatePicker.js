// import DatePicker from "react-datepicker";
import React, { useState } from "react";
import {
  DatePicker,
  // DemoItem,
  // DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

const DateDropdown = ({ selectDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    selectDate(date);
  };

  return (
    <div className="container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="form-control"
        placeholderText={"Please select a date"}
      /> */}
        {/* <DemoItem label="Desktop variant"> */}
        <DatePicker
          label="Select Date"
          defaultValue={dayjs()}
          onChange={handleDateChange}
        />

        {/* </DemoItem> */}
      </LocalizationProvider>
    </div>
  );
};

export default DateDropdown;
