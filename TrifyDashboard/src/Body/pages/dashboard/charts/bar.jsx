import React, { PureComponent } from 'react';
import "../../../body.css";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from 'recharts';

const data = [
  {
    name: '00:00',
    Humidity: 30,
    Temperature: 25,
    Voltage: 68,
  },
  {
    name: '04:00',
    Humidity: 32,
    Temperature: 25,
    Voltage: 70,
  },
  {
    name: '08:00',
    Humidity: 30,
    Temperature: 27,
    Voltage: 69,
  },
  {
    name: '12:00',
    Humidity: 26,
    Temperature: 30,
    Voltage: 72,
  },
  {
    name: '16:00',
    Humidity: 28,
    Temperature: 26,
    Voltage: 76,
  },
  {
    name: '20:00',
    Humidity: 30,
    Temperature: 25,
    Voltage: 80,
  },
  {
    name: '24:00',
    Humidity: 35,
    Temperature: 23,
    Voltage: 72,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
            right: 30,
            left: 20,
            bottom: 21,
            }}
          >
            <XAxis dataKey="name" scale="band" />
            <YAxis>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
              }}
            >
              Temp (C)
              </Label>
            </YAxis>
            <Legend />
            <Tooltip />
            <Area type="monotone" dataKey="Voltage" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="Temperature" barSize={30} fill="#413ea0" />
            <Line type="monotone" dataKey="Humidity" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
