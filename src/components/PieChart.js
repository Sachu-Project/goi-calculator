import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

function PieChart({ invested, returned }) {
  const data = [
    { name: 'Amount Invested', value: invested },
    { name: 'Amount Returned', value: returned },
  ];

  const COLORS = ['#0088FE', '#00C49F']; // Customize colors

  return (
    <RechartsPieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))
        }
      </Pie>
    </RechartsPieChart>
  );
}

export default PieChart;