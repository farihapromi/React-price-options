import React from 'react'



import { LineChart as LC, Line } from 'recharts';

const LineChart = () => {
    const subMarks=[
  { "id": 1, "name": "Alice", "math": 78, "physics": 72, "chemistry": 69 },
  { "id": 2, "name": "Bob", "math": 85, "physics": 80, "chemistry": 75 },
  { "id": 3, "name": "Charlie", "math": 92, "physics": 88, "chemistry": 91 },
  { "id": 4, "name": "David", "math": 66, "physics": 70, "chemistry": 60 },
  { "id": 5, "name": "Eve", "math": 74, "physics": 68, "chemistry": 72 },
  { "id": 6, "name": "Frank", "math": 81, "physics": 76, "chemistry": 78 },
  { "id": 7, "name": "Grace", "math": 90, "physics": 85, "chemistry": 87 },
  { "id": 8, "name": "Hannah", "math": 69, "physics": 65, "chemistry": 70 },
  { "id": 9, "name": "Ian", "math": 88, "physics": 82, "chemistry": 85 },
  { "id": 10, "name": "Jack", "math": 95, "physics": 91, "chemistry": 89 }
]


  return (
    <div>
        <LC height={400} width={500} data={subMarks}>
            <Line dataKey="math" stroke='red' />
             <Line dataKey="physics" stroke='green'  />
              <Line dataKey="chemistry"  stroke='blue' />
            </LC>
      
    </div>
  )
}

export default LineChart
