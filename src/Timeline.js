import './App.css';
import { useState } from 'react';
import { marketCap, marketPrice, marketVolume } from './Data';
import Linechart from './Graphs/Linechart';
import 'bootstrap/dist/css/bootstrap.css';

function Timeline() {
  const [selectedData, setSelectedData] = useState("marketCap");

  const options = [
    { value: "marketCap", label: "Market Cap ($ Billion)" },
    { value: "marketPrice", label: "Price ($)" },
    { value: "marketVolume", label: "Volume (BTC)" },
  ];

  const handleChange = (event) => {
    setSelectedData(event.target.value);
  };

  const data = {
    marketCap: {
      labels: marketCap.map((data) => data.year),
      datasets: [{
        label: 'Market Cap (USD Billions)',
        data: marketCap.map((data) => data.marketcap),
        tension: 0,
        borderColor: ' rgb(170, 170, 170)'
      }]
    },
    marketPrice: {
      labels: marketPrice.map((data) => data.year),
      datasets: [{
        label: 'Market Price (USD)',
        data: marketPrice.map((data) => data.price),
        tension: 0,
        borderColor: ' rgb(170, 170, 170)'
      }]
    },
    marketVolume: {
      labels: marketVolume.map((data) => data.year),
      datasets: [{
        label: 'Market Volume (BTC)',
        data: marketVolume.map((data) => data.volume),
        tension: 0,
        borderColor: ' rgb(170, 170, 170)'
      }]
    }
  };

  const optionsYAxis = {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: selectedData === 'marketCap' ? 'USD Billions' : selectedData === 'marketPrice' ? 'USD' : 'BTC'
        }
      }]
    }
  }

  const optionsXAxis = {
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Years'
        }
      }]
    }
  }

  return (
    <div className="App">

      <div className='container-fluid'>

        <div className='row'>
          <div id='spacing' className='col-md-12'></div>
        </div>

        <div className='row'>
          <div className='col-md-1'></div>
          <div id='time-header' className='col-md-4'>
            <p>Find detailed information on the worlds most popular crypto currency, Bitcoin.</p>
          </div>
          <div className='col-md-6'></div>
          <div className='col-md-1'></div>
        </div>

        <div className='row'>
          <div className='col-md-1'></div>
          <div id='spacing2' className='col-md-3'>Select a property to view detailed line graph.</div>
          <div className='col-md-8'></div>
        </div>

        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <select value={selectedData} onChange={handleChange}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className='col-md-1'></div>
        </div>

        <div className='row'>
          <div id='spacing' className='col-md-12'></div>
        </div>

        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <div style={{ width: 1000, color: 'white' }}>
              <Linechart chartData={data[selectedData]} className="Linechart" optionsYAxis={optionsYAxis} optionsXAxis={optionsXAxis} />
            </div>
          </div>
          <div className='col-md-1'></div>
        </div>

        <div className='row'>
          <div id='spacing' className='col-md-12'></div>
        </div>

      </div>

    </div>
  );
}

export default Timeline;

