import { Legend, Pie,PieChart, ResponsiveContainer, Tooltip } from 'recharts'

function PieCharts({ isAnimationActive = true}:{
    isAnimationActive? : boolean,
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Pie 
                activeShape={{
                    fill:"#3b82f6"
                }}
                data={[
                    {name:"Page A",prod1:500},
                    {name:"Page B",prod1:220},
                    {name:"Page C",prod1:653},
                ]}
                dataKey="prod1"
                isAnimationActive={isAnimationActive}
            />
        <Tooltip />
        <Legend />
        </PieChart>
    </ResponsiveContainer>
  )
}

export default PieCharts
