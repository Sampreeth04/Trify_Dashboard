import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';

const data = [
  {
    name: '00:00',
    Temp: 24,
  },
  {
    name: '03:00',
    Temp: 28,
  },
  {
    name: '06:00',
    Temp: 30,
  },
  {
    name: '09:00',
    Temp: 32,
  },
  {
    name: '12:00',
    Temp: 25,
  },
  {
    name: '15:00',
    Temp: 29,
  },
  {
    name: '18:00',
    Temp: 33,
  },
  {
    name: '21:00',
    Temp: 27,
  },
  {
    name: '24:00',
    Temp: 25,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 15,
            bottom: 21,
          }}
        >
          <XAxis dataKey="name">
          <Label
              position="bottom"
              style={{
                textAnchor: 'middle',
              }}
            >
              Time (hr)
              </Label>
          </XAxis>
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
          <Tooltip />
          <Line type="monotone" dataKey="Temp" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
