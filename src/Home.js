import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import headerImage from './Images/coins.png';
import refImage from './Images/ref.png';
import BarChart from './Graphs/Barchart';
import Volume from './Images/V.png';
import Marketcap from './Images/MC.png';
import Price from './Images/P.png';


const Home = () => {
    return (
        // main container
        <div className="container-fluid">

            {/* header */}
            <div className="row" style={{ height: '60vh' }}>
                <div className="col-md-1"></div>
                <div id="welcome-text" className="col-md-5 d-flex justify-content-left align-items-center">
                    <div className="text-left">
                        <h1 id="title-text">Comparing crypto has <br /> never been this easy.</h1>
                        <p>Welcome to Crypto Compare where you can compare the data of various <br />
                            cryptocurrencies in real-time! Our site uses Chart.js and data from an API to provide <br />
                            you with accurate and up-to-date information on your favorite cryptocurrencies. <br />
                            With our easy-to-use interface, you can compare historical data, view live charts, <br />
                            and get valuable insights into the performance of different cryptocurrencies. </p>
                    </div>
                </div>
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                    <img src={headerImage} alt="Header" />
                </div>
                <div className="col-md-1"></div>
            </div>

            {/* sources */}
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-11">
                    <img src={refImage} alt="Header" />
                </div>
            </div>

            {/* chartjs example */}
            <div className="row" id="row2">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <BarChart />
                </div>
                <div className="col-md-5">
                    <div className="text-left" id="sec1-txt">
                        <h1 className="chart-h1">See live crypto data <br /> with ChartJs</h1>
                        <p className="chart-p">Chart.js is a JavaScript library that allows you to easily create responsive, interactive, and customizable charts on a web page. It works by taking in data and rendering it into various types of charts such as line, bar, pie, and more. It uses the HTML5 canvas element to draw the charts and provides a simple and intuitive API for configuring the chart's appearance and behavior.</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            {/* title of objects */}
            <div className="row">
                <div className="col-md-1" id="objects-header"></div>
                <div className="col-md-11" id="objects-header">
                    <h1 id="title-text">Object Properties</h1>
                </div>
            </div>

            {/* market cap row */}
            <div className="row" id="row3">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <h2 id="h2">Market Cap</h2>
                    <p id="p1">Market capitalization, or market cap, is a commonly used metric in the cryptocurrency world to measure the total value of a particular cryptocurrency. It is calculated by multiplying the current price of a cryptocurrency by the total number of coins or tokens in circulation. Market cap is often used as an indicator of a cryptocurrency's relative size and popularity in the market, with higher market caps generally indicating greater demand and interest from investors. However, it's important to note that market cap alone does not necessarily reflect the fundamental value or potential of a cryptocurrency, and other factors such as technology, adoption, and regulatory environment should also be considered when evaluating a cryptocurrency's potential.</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                    <img src={Marketcap} alt="Header" />
                </div>
                <div className="col-md-1"></div>
            </div>

            {/* price row */}
            <div className="row" id="row3">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <h2 id="h2">Price</h2>
                    <p id="p1">In the world of cryptocurrencies, price refers to the current value of a particular cryptocurrency in relation to other currencies, such as USD, EUR, or BTC. The price of a cryptocurrency is determined by the forces of supply and demand, with buyers and sellers exchanging the currency at a mutually agreed-upon price in the market. Price fluctuations in the crypto market can be quite volatile, as the market is driven by a wide range of factors including news events, adoption rates, technological advancements, regulatory changes, and investor sentiment. As such, cryptocurrency prices can rise or fall rapidly, presenting both opportunities and risks for investors. It's important to remember that cryptocurrency prices are not always a reliable indicator of a cryptocurrency's long-term value or potential, and investors should conduct thorough research before making any investment decisions.</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                    <img src={Price} alt="Header" />
                </div>
                <div className="col-md-1"></div>
            </div>

            {/* volume row */}
            <div className="row" id="row3">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <h2 id="h2">Volume</h2>
                    <p id="p1">In the context of cryptocurrencies, volume refers to the total amount of a particular cryptocurrency that has been traded within a given time period, typically measured in a 24-hour period. Volume is a key metric in the crypto market, as it provides insight into the level of market activity and liquidity for a particular cryptocurrency. High trading volumes are generally seen as a positive sign for a cryptocurrency, as it indicates that there is strong demand and interest from buyers and sellers. On the other hand, low trading volumes may indicate a lack of interest or liquidity, which can lead to increased price volatility and difficulty in executing trades. It's important to note that trading volume alone does not necessarily indicate the fundamental value or potential of a cryptocurrency, and investors should consider a range of factors when making investment decisions.</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                    <img src={Volume} alt="Header" />
                </div>
                <div className="col-md-1"></div>
            </div>

            {/* spacing before footer */}
            <div className="row">
                <div className="col-md-12" id="objects-header"></div>
            </div>


        </div>
    )
}

export default Home;




