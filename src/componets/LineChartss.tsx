import { CartesianGrid,Legend,Line,LineChart,ResponsiveContainer,XAxis,YAxis} from "recharts";

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

function LineChartss() {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ProductSales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line 
                type="monotone"
                dataKey="product1"
            />
            <Legend />
        </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartss
