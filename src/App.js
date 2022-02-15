import './App.scss';
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";
import Promo from "./components/Promo";
import Profit from "./components/Profit";
import Transactions from "./components/Transactions";
import Overview from "./components/Overview";
import Trend from "./components/Trend";
import {Component} from "react";
import Assets from "./components/Assets";
import CompareChart from "./components/CompareChart";
import Slider from "./components/Slider";
import gears from "../src/assets/gears.json"

import graph1 from './assets/graph1.svg'
import graph2 from './assets/graph2.svg'
import graph3 from './assets/graph3.svg'

import axios from 'axios';

const base = 'https://api.coingecko.com/api/v3/';

export default class App extends Component {
    state = {
        dataLoaded: false,
        windowWidth: 0,
        data: {
            "bitcoin": {graph: graph1},
            "polkadot": {graph: graph2},
            "ethereum": {graph: graph3},
            "litecoin": {graph: graph1},
            "cardano": {graph: graph2},
            "solana": {graph: graph3}
        },
    }

    setWidth = () => {
        this.setState({windowWidth: window.innerWidth});
        window.addEventListener('resize', () => {
            this.setState({windowWidth: window.innerWidth})
        })
    }

    getInfo = async () => {
        for (let coin in this.state.data) {
            const response = await axios.get
                (`${base}coins/${coin}?community_data=false&developer_data=false`)
            ;
            const dailyChart = await axios.get(`${base}/coins/${coin}/market_chart?vs_currency=usd&days=1`)
            const weeklyChart = await axios.get(`${base}/coins/${coin}/market_chart?vs_currency=usd&days=6&interval=daily`)
            const monthlyChart = await axios.get(`${base}/coins/${coin}/market_chart?vs_currency=usd&days=29&interval=daily`)
            const data = response.data,
                day = setChartData(dailyChart),
                week = setChartData(weeklyChart),
                month = setChartData(monthlyChart);
            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    [coin]: {
                        ...prevState.data[coin],
                        daily: day,
                        weekly: week,
                        monthly: month,
                        img: data.image.thumb,
                        symbol: data.symbol,
                        name: data.name,
                        last: data.market_data.current_price.usd,
                        change: data.market_data.price_change_24h,
                        changePercent: data.market_data.price_change_percentage_24h_in_currency.usd,
                        changePrice: data.market_data.price_change_24h_in_currency.usd,
                    }
                }
            }))
        }
        this.setState({dataLoaded: true})

        function setChartData(dataObj) {
            let chartObj = {index: [], price: [], volumes: []};
            for (const item of dataObj.data.prices) {
                chartObj.index.push(item[0]);
                chartObj.price.push(item[1]);
            }
            for (const item of dataObj.data.total_volumes) chartObj.volumes.push(item[1]);
            return chartObj;
        }
    }

    async componentDidMount() {
        this.setWidth();
        await this.getInfo();
    }

    render() {
        const {windowWidth, data, dataLoaded} = this.state;
        return (
            dataLoaded === true ? <>
                <Loader className="pageloader hide" animation={gears}/>
                <div className="App d-md-flex align-items-start">
                    <Sidebar/>
                    <div className="App_content">
                        <Panel windowWidth={windowWidth}/>
                        <div className="App_content-grid d-grid">
                            <Promo windowWidth={windowWidth}/>
                            <Transactions/>
                            <Profit/>
                            <Overview data={data}/>
                            <Trend windowWidth={windowWidth} data={data}/>
                            <Assets data={data}/>
                            <CompareChart/>
                            <Slider data={data}/>
                        </div>
                    </div>
                </div>
            </> : <Loader className="pageloader show" animation={gears}/>
        );
    }
}

