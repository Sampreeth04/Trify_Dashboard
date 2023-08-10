import React from 'react';
import "../../body.css";
import { useContext } from 'react';
import SidebarContext from '../../../components/Sidebar/SidebarContext';

import Axios from "axios";

import { Button } from '@mui/material';
import AuthContext from '../../../context/AuthContext';

export default function Bike() {

  const {show, setShow} = useContext(SidebarContext)
  const { authTokens } = useContext(AuthContext);

  const disableBike = async () => {
    console.log("Disabling bike");
    try {
      let response = await Axios.post(
        "http://localhost:8000/vehicle_api/",
        {"topic": "device", "action": "bike:disable", "info": "disabling bike through web app"},
        {
          headers: {
            Authorization: `Bearer ${authTokens?.access}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("success: ", response);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  

  return (
    <div style={{display: 'block', marginLeft: !show ? "100px" : "260px", transition: "margin 0.47s ease"}}>
      <Button onClick={disableBike}>Disable Bike</Button>
    </div>
  )
}