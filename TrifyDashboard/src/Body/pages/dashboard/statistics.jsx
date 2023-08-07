import * as React from 'react';
import "../../body.css";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SidebarContext from '../../../components/Sidebar/SidebarContext';

import { useContext } from 'react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      // style={{display: 'block', marginLeft: !show ? "80px" : "240px", transition: "margin 0.47s ease"}}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const columns = [
  { id: 'datafield', label: 'Data Field', minWidth: 170 },
  { id: 'code', label: 'UOM\u00a0', minWidth: 100 },
  {
    id: 'dataset1',
    label: 'Dataset 1',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dataset2',
    label: 'Dataset 2',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'dataset3',
    label: 'Dataset 3',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'dataset4',
    label: 'Dataset 4',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'dataset5',
    label: 'Dataset 5',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(datafield, code, dataset1, dataset2, dataset3, dataset4, dataset5) {
  return { datafield, code, dataset1, dataset2, dataset3, dataset4, dataset5 };
}

const rows1 = [
  createData('Bike Id', 'Id', 'AA14', 'AA15', 'AA16', 'AA17', 'AA18'),
  createData('Cell Voltage(Volts)', 'Volts', 3.95, 3.89, 3.9, 3.94, 3.9),
  createData('Total Voltage(Volts)', 'Volts', 82, 79.8, 78, 76.2, 78),
  createData('Residual Capacity(AH)', 'AH', 32, 15, 26, 20, 30),
  createData('Nominal Capacity(AH)', 'Ah', 35, 35, 35, 35, 35),
  createData('Battery Cycle Count', '#', 3, 520, 60, 78, 100),
  createData('Cell Balence(High/Low)', 'H/L', 'H', 'H', 'H', 'H', 'H'),
  createData('BMS Version', 'Version', 'V2', 'V1', 'V2', 'v3', 'V2'),
  createData('Temperature from Each Sensor(DEGREE)', 'Deg C', 29, 28.8, 30.2, 36.4, 25.9),
  createData('Calibration Status', '#', '23-04-2023; 22:10', '23-04-2023; 22:10', '23-04-2023; 22:10', '23-04-2023; 22:10', '23-04-2023; 22:10'),
  createData('Battery Location (Bike/CS)', 'Lat/Long', '41.40338, 2.17403', '41.40338, 2.17404', '41.40338, 2.17405', '41.40338, 2.17406', '41.40338, 2.17407'),
  createData('Time Stamp', '', 'Green', 'Green', 'Green', 'Green','Green'),
  createData('State of Health (%)', '%'),
  createData('State of Charge (%)', '%'),
  createData('State of Function (%)', '%'),
  createData('Energy Throughput (kWh)', 'KWh'),
  createData('Energy Efficiency (%)', '%'),
  createData('Energy Loss (Watts)', 'Watts'),
  createData('Impedance (Ohms)', 'Ohms'),
  createData('Internal Resistance (Ohms)', 'Ohms'),
  createData('Charge/Discharge Rate (Amps/sec)', 'Amps/sec'),
  createData('Self Discharge Rate (%)', '%'),
  createData('Charge Temperature (°C)', 'Deg C'),
  createData('Discharge Temperature (°C)', 'Deg C'),
  createData('Humidity (%)', '%'),
  createData('Battery Chemistry', '', 'NMC', 'NMC'),
];

const rows2 = [
  createData('Bike Id', 'Id', 'AA14', 'AA15', 'AA16', 'AA17', 'AA18'),
  createData('Bike Location (Lat,Long)', 'Lat/Long', '41.40338, 2.17403', '41.40338, 2.17404', '41.40338, 2.17405', '41.40338, 2.17406', '41.40338, 2.17407'),
  createData('Speed (KM/hr)', 'Km/hr', 80, 34, 72, 0, 60),
  createData('Number of Batteries on Bike', '', 2, 2, 2, 2, 2),
  createData('Ignition (On/Off)', 'On/Off', 'On', 'On', 'On', 'Off', 'On'),
  createData('WIFI/BLE Status', 'Connected/Disconnected', 'Connected', 'Connected', 'Connected', 'Disconnected', 'Connected'),
  createData('Charger Plugged (Yes/No)', 'Yes/No', 'No', 'No', 'No', 'Yes', 'No'),
  createData('Remote Lock Status', 'Locked/Unlocked', 'Unlocked', 'Unlocked', 'Unlocked', 'Locked', 'Unlocked'),
  createData('Total Distance Travelled (KM)', 'Km', 2235, 20145, 100, 25, 4535),
  createData('Time Stamp', '#', '10:00', '11:00', '12:00', '13:00', '14:00'),
  createData('Bike`s Health Status', '', 'Green', 'Green', 'Green', 'Green','Green'),
  createData('Network Coverage', '#', '---', '---', '---', '---', '---','---'),
  createData('Local Weather Conditions', '', 'wind', 'cloud', 'wind', 'cloud', 'fog'),
  createData('Bike Usage Status', '', 'inUse', 'inUse', 'inUse', 'idle', 'underMaintenance'),
];

export default function StickyHeadTable() {

  const [value, setValue] = React.useState(0);
  const {show, setShow} = useContext(SidebarContext)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', background: '', display: 'block', marginLeft: !show ? "80px" : "240px", transition: "margin 0.47s ease"}}>
      <Box sx={{ borderBottom: 5, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Battery Data" {...a11yProps(0)} />
          <Tab label="Bike Data" {...a11yProps(1)} />
          <Tab label="RSS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Paper sx={{ width: '100%', overflow: 'hidden'}}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'string'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Paper sx={{ width: '100%', overflow: 'hidden'}}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'string'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </CustomTabPanel>
    </Box>
  );
}