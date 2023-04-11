import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Bar, Pie, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  RadialLinearScale,
  ArcElement
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement
);

const API_KEY = "bb57535a180e7f87114c85cee4ca5d61744082c706e7c32089907324eafc9017";
const API_URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD&api_key=${API_KEY}`;

function Compare() {
  const [data, setData] = useState([]);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data.Data);
        setCoins(response.data.Data.map((coin) => ({ id: coin.CoinInfo.Id, name: coin.CoinInfo.FullName })));
      })
      .catch((error) => console.error(error));
  }, []);

  function handleObjectSelection(objectId) {
    setSelectedObjects([...selectedObjects, objectId]);
  }

  function handleObjectDeselection(objectId) {
    setSelectedObjects(selectedObjects.filter((id) => id !== objectId));
  }

  const selectedData = data.filter((coin) => selectedObjects.includes(coin.CoinInfo.Id));

  const barData = {
    labels: selectedData.map((coin) => coin.CoinInfo.FullName),
    datasets: [
      {
        label: "Price",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        width: "100px",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: selectedData.map((coin) => coin.DISPLAY.USD.PRICE),
      },
    ],
  };

  const pieData = {
    labels: selectedData.map((coin) => coin.CoinInfo.FullName),
    datasets: [
      {
        data: selectedData.map((coin) => coin.RAW.USD.MKTCAP),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#1abc9c", "#f1c40f"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#1abc9c", "#f1c40f"],
      },
    ],
  };

  const radarData = {
    labels: ["Price", "Market Cap", "Volume"],
    datasets: selectedData.map((coin) => ({
      label: coin.CoinInfo.FullName,
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [coin.DISPLAY.USD.PRICE, coin.RAW.USD.MKTCAP, coin.RAW.USD.TOTALVOLUME24H],
    })),
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 100,
      }
    },
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div id="spacing" className="col-md-12"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-6" id="compare-header">
          <p>Compare Crypto Currencies Now</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3" id="compare-txt">
          <p>Please select the crypto currencies you would like to compare below.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className=" col-md-10" id="left">
          <ul>
            {coins && coins.map((coin) => (
              <li key={coin.id}>
                <div id="boxes">
                  <input type="checkbox" onChange={(e) => (e.target.checked ? handleObjectSelection(coin.id) : handleObjectDeselection(coin.id))} />
                  {coin.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <Bar
            data={barData}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                  },
                },],
              },
            }}
          />
        </div>
        <div className="col-md-5">
          <Pie
            data={pieData}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Radar
            data={radarData}
            options={radarOptions}
          />
        </div>
        <div className="col-md-1"></div>
      </div>

    </div>
  );
}

export default Compare;