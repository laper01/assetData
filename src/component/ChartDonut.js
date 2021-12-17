import React,{useState} from 'react';
import {PieChart, Pie, Legend, Tooltip, Cell, Label} from 'recharts';
  
  
export default function ChartDonut (props) {
    const data01 = [{name: 'Group A', value: 5}, {name: 'Group B', value: 4},
    {name: 'Group C', value: 1}, {name: 'Group D', value: 1}]
    const [label, setLabel] = useState(data01[0].value)
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  function handelLabel(name){
    setLabel(name)
  }
return (
    <PieChart width={400} height={200}>
    <Pie 
    data={data01} 
    innerRadius={60}
    outerRadius={70} 
    fill="#8884d8"
    >
    <Label 
    value={label} position="centerBottom"  className='label-top' fontSize='27px'
    />
      {
        data01.map((entry, index) => <Cell onClick={()=>handelLabel(entry.value)} fill={COLORS[index % COLORS.length]}/>)
      }
    </Pie>
   </PieChart>
);
}