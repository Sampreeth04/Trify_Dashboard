import React from 'react';
import "../../body.css";
import Chart from './charts/chart';
import Bar from './charts/bar';
import Temperature from './charts/temperature';
import Voltage from './charts/voltage';
import Humidity from './charts/humidity';
import Show from '../../show';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { styled } from "@mui/system";
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimelineIcon from '@mui/icons-material/Timeline';

import { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import SidebarContext from '../../../components/Sidebar/SidebarContext';

const StyledBatteryChargingFullIcon = styled(BatteryChargingFullIcon,{
  name: "StyledBatteryChargingFullIcon",
  slot: "Wrapper"
})({
  color: "#f79439",
});

const StyledPersonIcon = styled(PersonIcon, {
  name: "StyledPersonIcon",
  slot: "Wrapper"
})({
  color: "#f79439",
});

const StyledAssessmentIcon = styled(AssessmentIcon, {
  name: "StyledAssessmentIcon",
  slot: "Wrapper"
})({
  color: "#f79439",
});

const StyledTimelineIcon = styled(TimelineIcon, {
  name: "StyledTimelineIcon",
  slot: "Wrapper"
})({
  color: "#f79439",
});

const StyledTrendingUpIcon = styled(TrendingUpIcon,{
  name: "StyledTrendingUpIcon",
  slot: "Wrapper"
})({
  color: "green",
});

const StyledTrendingDownIcon = styled(TrendingDownIcon,{
  name: "StyledTrendingDownIcon",
  slot: "Wrapper"
})({
  color: "red",
});



// const contentStyle = {
//     marginLeft: sideNavExpanded ? "250px" : "70px", // arbitrary values
//     transition: "margin 0.2s ease"
// };


const defaultTheme = createTheme();



export default function Dashboard() {

  // const [sideNavExpanded, setSideNavExpanded] = React.useState(true);
  const [batteryPercentage, setBatteryPercentage] = useState(0);
  const [batteryVoltage, setBatteryVoltage] = useState(0);
  
  const {show, setShow} = useContext(SidebarContext)

  useEffect(() => {
    const getBatteryData = async () => {
      try {
        let response = await Axios.get("http://192.168.1.4:8883/getData1");
        // console.log(response.data.data)
        if (response.data.data){
          setBatteryPercentage(response.data.data)
        }
      } catch(error) {
        console.log(error)
      }
      try {
        let response = await Axios.get("http://192.168.1.4:8883/getData2");
        // console.log(response.data.data)
        if (response.data.data){
          setBatteryVoltage(response.data.data)
        }
      } catch(error) {
        console.log(error)
      }
    }
    getBatteryData()

    const intervalId = setInterval(getBatteryData, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [])
  
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'block', marginLeft: !show ? "60px" : "220px", transition: "margin 0.47s ease" }} >
        <CssBaseline />
        <Box>
          <Show />
          <Toolbar />
          <Grid container spacing={5}>
            {/* Chart */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 1,
                  display: 'flex',
                  height: 'auto',
                  marginTop: -3,
                  marginLeft: 3,
                  flexDirection: 'column',
                  boxShadow: "0px 1px 5px 2px grey"
                }}
              >
                <div>
                  <Grid item xs={12} md={4} lg={12}>
                    <Grid container xs={12}>
                      <Grid item xs={9}>
                        <h3 className='name' style={{marginLeft:'1px'}}><b>{('Battery Charge')}</b></h3>
                      </Grid>
                      <Grid item xs={3} 
                        sx={{
                          marginRight: '-25px',
                        }}>
                      </Grid>
                      <StyledBatteryChargingFullIcon />
                    </Grid>
                    <p className='per'>{batteryPercentage ? batteryPercentage : 0}%</p>
                  </Grid>
                  <Grid container xs={12} gap={0.5}>
                    <Grid item xs={1.2}>
                      <h3 className='name' style={{marginLeft:'1px'}}><b><StyledTrendingUpIcon /></b></h3>
                    </Grid>
                    Since last month.
                  </Grid>
                </div>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 1,
                  display: 'flex',
                  height: 'auto',
                  marginTop: -3,
                  marginLeft: 3,
                  flexDirection: 'column',
                  boxShadow: "0px 1px 5px 2px grey"
                }}
                >
                <div>
                  <Grid item xs={12} md={4} lg={12}>
                    <Grid container xs={12}>
                      <Grid item xs={9}>
                        <h3 className='name' style={{marginLeft:'1px'}}><b>{('Battery Voltage')}</b></h3>
                      </Grid>
                      <Grid item xs={3} 
                        sx={{
                          marginRight: '-25px',
                        }}>
                      </Grid>
                      <StyledPersonIcon />
                    </Grid>
                    <p className='per'>{batteryVoltage ? batteryVoltage : 0} V</p>
                  </Grid>
                  <Grid container xs={12} gap={0.5}>
                    <Grid item xs={1.2}>
                      <h3 className='name' style={{marginLeft:'1px'}}><b><StyledTrendingDownIcon /></b></h3>
                    </Grid>
                    Since last month.
                  </Grid>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 1,
                  display: 'flex',
                  height: 'auto',
                  marginTop: -3,
                  marginLeft: 3,
                  flexDirection: 'column',
                  boxShadow: "0px 1px 5px 2px grey"
                }}
                >
                <div>
                  <Grid item xs={12} md={4} lg={12}>
                    <Grid container xs={12}>
                      <Grid item xs={9}>
                        <h3 className='name' style={{marginLeft:'1px'}}><b>{('Sales')}</b></h3>
                      </Grid>
                      <Grid item xs={3} 
                        sx={{
                          marginRight: '-25px',
                        }}>
                      </Grid>
                      <StyledAssessmentIcon />
                    </Grid>
                    <p className='per'>924</p>
                  </Grid>
                  <Grid container xs={12} gap={0.5}>
                    <Grid item xs={1.2}>
                      <h3 className='name' style={{marginLeft:'1px'}}><b><StyledTrendingUpIcon /></b></h3>
                    </Grid>
                    Since last month.
                  </Grid>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 1,
                  display: 'flex',
                  height: 'auto',
                  marginTop: -3,
                  marginLeft: 3,
                  flexDirection: 'column',
                  boxShadow: "0px 1px 5px 2px grey"
                }}
                >
                <div>
                  <Grid item xs={12} md={4} lg={12}>
                    <Grid container xs={12}>
                      <Grid item xs={9}>
                        <h3 className='name' style={{marginLeft:'1px'}}><b>{('Performance')}</b></h3>
                      </Grid>
                      <Grid item xs={3} 
                        sx={{
                          marginRight: '-25px',
                        }}>
                      </Grid>
                      <StyledTimelineIcon />
                    </Grid>
                    <p className='per'>49%</p>
                  </Grid>
                  <Grid container xs={12} gap={0.5}>
                    <Grid item xs={1.2}>
                      <h3 className='name' style={{marginLeft:'1px'}}><b><StyledTrendingUpIcon /></b></h3>
                    </Grid>
                    Since last month.
                  </Grid>  
                </div>
              </Paper>
            </Grid>
            <Grid container spacing={5} marginTop={1} marginLeft={3} >
              <Grid item md={4} lg={4}>
                <Paper sx={{ p: 3, display: 'flex', height: 220, boxShadow: "0px 1px 5px 2px grey",}}>
                  <Temperature />
                </Paper>
              </Grid>
              <Grid item md={4} lg={4}>
                <Paper sx={{ p: 3, display: 'flex', height: 220, boxShadow: "0px 1px 5px 2px grey",}}>
                  <Voltage />
                </Paper>
              </Grid>
              <Grid item md={4} lg={4}>
                <Paper sx={{ p: 3, display: 'flex', height: 220, boxShadow: "0px 1px 5px 2px grey",}}>
                  <Humidity />
                </Paper>
              </Grid>
            </Grid>
            {/* Recent Orders */}
            <Grid container spacing={5} marginTop={1} marginLeft={3} >
              <Grid item xs={12} md={4} lg={6}>
                <Paper sx={{ p: 1, display: 'flex', height: 340, boxShadow: "0px 1px 5px 2px grey",}}>
                  <Chart/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={6}>
                <Paper sx={{ p: 1, display: 'flex', height: 340, boxShadow: "0px 1px 5px 2px grey",}}>
                  <Bar/>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}