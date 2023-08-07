import React from 'react';
import "../../body.css";
import { useContext } from 'react';
import SidebarContext from '../../../components/Sidebar/SidebarContext';

export default function Admin() {

  const {show, setShow} = useContext(SidebarContext)

  return (
    <div style={{display: 'block', marginLeft: !show ? "100px" : "260px", transition: "margin 0.47s ease"}}>
      Products
    </div>
  )
}