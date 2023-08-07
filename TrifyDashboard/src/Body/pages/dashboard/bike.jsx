import React from 'react';
import "../../body.css";
import { useContext } from 'react';
import SidebarContext from '../../../components/Sidebar/SidebarContext';

import { Button } from '@mui/material';

export default function Bike() {

  const {show, setShow} = useContext(SidebarContext)

  return (
    <div style={{display: 'block', marginLeft: !show ? "100px" : "260px", transition: "margin 0.47s ease"}}>
      <Button>Disable Bike</Button>
    </div>
  )
}