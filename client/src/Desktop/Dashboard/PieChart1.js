


import React, { useState } from 'react'
import { PieChart, Pie, Cell } from "recharts"

const data = [
  { name: "Group A", value: 800 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]



const PieChart1 = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  }

  const handleMouseOut = () => {
    setActiveIndex(null);
  }




  return (
   
    <PieChart width={800} height={400} className="piechart1">
        <Pie
            data={data}
            cx={420}
            cy={200}
            startAngle={10}
            endAngle={450}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
        >
            {data.map((entry, index) => (
            <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
            />
            ))}
        </Pie>
    </PieChart>

  );
}

export default PieChart1;
