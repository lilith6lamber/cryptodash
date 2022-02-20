import './App.scss';
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import Panel from "./components/Panel";
import Promo from "./components/Promo";
import Profit from "./components/Profit";
import Transactions from "./components/Transactions";
import Sparkline from "./components/Sparkline";
import Trend from "./components/Trend";
import {Component} from "react";
import Assets from "./components/Assets";
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
                (`${base}coins/${coin}?community_data=false&developer_data=false&sparkline=true`)
            ;
            const data = response.data;
            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    [coin]: {
                        ...prevState.data[coin],
                        img: data.image.thumb,
                        symbol: data.symbol,
                        name: data.name,
                        last: data.market_data.current_price.usd,
                        change: data.market_data.price_change_24h,
                        changePercent: data.market_data.price_change_percentage_24h_in_currency.usd,
                        changePrice: data.market_data.price_change_24h_in_currency.usd,
                        sparkline: data.market_data.sparkline_7d.price
                    }
                }
            }))
        }
        this.setState({dataLoaded: true})
    }

    async componentDidMount() {
        this.setWidth();
        await this.getInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.windowWidth !== prevState.windowWidth) {
            this.setWidth();
        }
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
                            <Sparkline data={data}/>
                            <Trend windowWidth={windowWidth} data={data}/>
                            <Assets data={data}/>
                            <Slider data={data}/>
                        </div>
                    </div>
                </div>
            </> : <Loader className="pageloader show" animation={gears}/>
        );
    }
}

