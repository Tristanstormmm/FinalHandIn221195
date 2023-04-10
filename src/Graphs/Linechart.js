import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Linechart = () => {
  const [property, setProperty] = useState('price');
  const [data, setData] = useState([]);
  const [propertiesList, setPropertiesList] = useState(['price', 'marketCap', 'volume', 'change', 'supply']);

  const handleChange = (event) => {
    setProperty(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.coinranking.com/v2/coins?limit=10', {
        headers: {
          'x-access-token': 'coinrankingd8c0b701f67b2df270a5ef4b18a8d607f2cc6c924e4bb05a'
        }
      });
      const coins = result.data.data.coins;
      const chartData = coins.map((coin) => {
        return {
          label: coin.name,
          data: coin.history.map((entry) => entry[`${property}`]),
          fill: false,
          borderColor: `#${coin.color}`,
          tension: 0.1,
        };
      });
      setData(chartData);
    };
    fetchData();
  }, [property]);

  const chartData = {
    labels: data.length ? data[0].data.map((entry) => entry.timestamp) : [],
    datasets: data,
  };

  return (
    <div>
      <h1>Timeline Page</h1>
      <select value={property} onChange={handleChange}>
        {propertiesList.map((prop) => (
          <option value={prop}>{prop}</option>
        ))}
      </select>
      <Line data={chartData} />
    </div>
  );
};

export default Linechart;