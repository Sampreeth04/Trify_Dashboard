import React, { useContext, useState } from "react";
import "./index.css";
// import "./Sidebar.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import img1 from "../../assets/user.png";

import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Setting from "@mui/icons-material/Settings";
import Log from "@mui/icons-material/Logout";
import { Container } from "@mui/material";

import { Link, NavLink } from "react-router-dom";
import imgLogo from "../../assets/Trify.ico";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Body/pages/dashboard/dashboard";
import Pages from "../../Body/pages/dashboard/pages";
import Products from "../../Body/pages/dashboard/products";
import Settings from "../../Body/pages/dashboard/settings";
import Statistics from "../../Body/pages/dashboard/statistics";
import User from "../../Body/profile/signup";
import Logout from "../../Body/pages/dashboard/logout";
import Mapping from "../../Body/pages/dashboard/mapping";
import SidebarContext from "./SidebarContext";
import AuthContext from "../../context/AuthContext";

const Sidebar = () => {
  // const [show, setShow] = useState(true);
  const { show, setShow } = useContext(SidebarContext);
  const { logoutUser } = useContext(AuthContext);

  const handleToggle = () => {
    setShow(!show);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main className={show ? "space-toggle" : null}>
      <Box
        sx={{
          // boxShadow: "0px 0px 12px 5px grey",
          position: "fixed",
          width: "100%",
          marginLeft: -13,
          zIndex: 2000,
        }}
      >
        <header className={`header ${show ? "space-toggle" : null}`}>
          <h2>Admin</h2>
          <Container maxWidth="xl">
            <React.Fragment>
              <Box
                className="icon"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Profile">
                  <IconButton
                    onClick={handleClick}
                    sx={{ ml: 0 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar alt="Admin" src={img1} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                sx={{ zIndex: 2000 }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Setting fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={logoutUser}>
                  <ListItemIcon>
                    <Log fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </Container>
        </header>
      </Box>

      <Box
        sx={{
          // boxShadow: "0px 2px 12px 5px grey",
          position: "fixed",
          display: "flex",
          height: "100%",
          marginLeft: -4.5,
          marginTop: -8,
          zIndex: 2000,
        }}
      >
        <aside className={`sidebar ${show ? "show" : null}`}>
          <nav className="nav">
            <div>
              <Link className="nav-logo" onClick={handleToggle}>
                <i className="nav-logo-icon1">
                  <img width={40} src={imgLogo} alt="img" />
                </i>
                <span className="nav-logo-name1">Trify</span>
              </Link>

              <div className="nav-list">
                <NavLink
                  exact
                  to="/dashboard"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fas fa-home-alt nav-link-icon"></i>
                  <span className="nav-link-name">Dashboard</span>
                </NavLink>
                <NavLink
                  exact
                  to="/products"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fas fa-briefcase nav-link-icon"></i>
                  <span className="nav-link-name">Products</span>
                </NavLink>
                <NavLink
                  exact
                  to="/pages"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fas fa-file-lines nav-link-icon"></i>
                  <span className="nav-link-name">Pages</span>
                </NavLink>
                <NavLink
                  exact
                  to="/statistics"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fas fa-chart-simple nav-link-icon"></i>
                  <span className="nav-link-name">Statistics</span>
                </NavLink>
                <NavLink
                  exact
                  to="/bike"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fa-solid fa-bicycle nav-link-icon"></i>
                  <span className="nav-link-name">Bike Details</span>
                </NavLink>
                <NavLink
                  exact
                  to="/settings"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fas fa-gear nav-link-icon"></i>
                  <span className="nav-link-name">Settings</span>
                </NavLink>
                <NavLink
                  to="/mapping-journey"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fas fa-thin fa-map-location-dot nav-link-icon"></i>
                  <span className="nav-link-name">Maps - Journey</span>
                </NavLink>
                <NavLink
                  to="/mapping-aggregate"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="fas fa-thin fa-map-location-dot nav-link-icon"></i>
                  <span className="nav-link-name">Maps - Aggregate</span>
                </NavLink>
              </div>
            </div>
            <Link className="nav-logo" onClick={logoutUser}>
              <i className="fas fa-arrow-right-from-bracket nav-logo-icon"></i>
              <span className="nav-logo-name">Logout</span>
            </Link>
          </nav>
        </aside>
      </Box>
      {/* <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/pages" element={<Pages />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/statistics" element={<Statistics />} />
        <Route exact path="/users" element={<User />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/mapping" element={<Mapping />} />
      </Routes> */}
    </main>
  );
};

export default Sidebar;
