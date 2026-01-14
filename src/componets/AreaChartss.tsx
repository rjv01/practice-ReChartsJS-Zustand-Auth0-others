import { 
        AreaChart, 
        Area, 
        ResponsiveContainer,
        XAxis,
        YAxis,
        CartesianGrid,
        Tooltip,
        Legend,
    } from "recharts";

type ProdcutSalesType = {
    name:string,
    product1:number,
    product2:number,
};

const ProductSales:ProdcutSalesType[] = [
    { 
        name: "Jan",
        product1: 4000,
        product2: 2400
    },
    { 
        name: "Feb",
        product1: 3000,
        product2: 1398
    },
    { 
        name: "Mar",
        product1: 2000,
        product2: 9800
    },
    { 
        name: "Apr",
        product1: 2780,
        product2: 3908
    },
    { 
        name: "May",
        product1: 1890,
        product2: 4800
    },
];

const CustomToolTip = ({ active,payload,label } : {
        active?:boolean,
        payload?:any[],
        label?:string
    }) => {
    if(active && label && payload && payload.length) {
        return (
            <div className="rounded-md border border-blue-400 bg-blue-900/80 p-3 text-white">
                <p>{label}</p>
                <p>Product 1: <span>${payload[0].value}</span> </p>
                <p>Product 2: <span>${payload[1].value}</span> </p>
            </div>
        )
    }
    return null;
};

function AreaChartss() {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={ProductSales}>
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip content={<CustomToolTip />} />
            <Legend />
            <CartesianGrid strokeDasharray="3 3"/>
            <Area 
                type="monotone" 
                dataKey="product1"
                stroke="#2563eb"
                fill="#3b82f6"
                stackId="1"
            />
            <Area 
                type="monotone" 
                dataKey="product2"
                stroke="#2563eb"
                fill="#8b5cf6"
                stackId="1"
            />
        </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaChartss
