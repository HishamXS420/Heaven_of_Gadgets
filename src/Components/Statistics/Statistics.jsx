import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { useState, useEffect } from "react";

const Statistics = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  // To receive gadget's data and put them into the chart
  const data = gadgets.map((gadget) => ({
    name: gadget.title,
    price: gadget.price,
    rating: gadget.rating,
    amt: 2400,
  }));

  return (
    <div className="pt-10 flex flex-col justify-center items-center max-w-6xl mx-auto">
      <div className="flex flex-col justify-center text-center mx-4 gap-3">
        <h1 className="text-3xl text-white font-bold mb-4">Statistics</h1>
        <h2 className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </h2>
      </div>
      <div className=" mt-50 ">
        <BarChart width={1600} height={300} data={data}>
          <XAxis
            dataKey="name"
            stroke="#8884d8"
            tick={{ fontSize: 12 }}
            interval={0}
          />
          {/* interval worked while all the names were not visible in the x axis */}
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar yAxisId="left" dataKey="price" fill="#8884d8" barSize={30} />
          <Bar yAxisId="right" dataKey="rating" fill="#82ca9d" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
