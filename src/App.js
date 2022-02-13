import './App.scss';
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

const base = 'https://api.coingecko.com/api/v3/';

//TODO: auto update?
//TODO: app preloader

export default class App extends Component {
    state = {
        windowWidth: 0,
        data: {
            "bitcoin": {},
            "polkadot": {},
            "ethereum": {},
            "litecoin": {},
            "cardano": {},
            "solana": {}
        },
    }

    setWidth = () => {
        this.setState({windowWidth: window.innerWidth});
        window.addEventListener('resize', () => {
            this.setState({windowWidth: window.innerWidth})
        })
    }

    getInfo = () => {
        for (let coin in this.state.data) {
            fetch(`${base}coins/${coin}?tickers=true&market_data=true&community_data=false&developer_data=false`)
                .then(response => response.json())
                .then(data => {
                    this.setState(prevState => ({
                        data: {
                            ...prevState.data,
                            [coin]: {
                                img: data.image.thumb,
                                symbol: data.symbol,
                                name: data.name,
                                last: data.market_data.current_price.usd,
                                change: data.market_data.price_change_24h
                            }
                        }
                    }))
                })
                .catch(err => console.error(err))
        }
    }

    componentDidMount() {
        this.setWidth();
        this.getInfo();
    }

    render() {
        const {windowWidth, data} = this.state;
        return (
            <div className="App d-md-flex align-items-start">
                <Sidebar/>
                <div className="App_content">
                    <Panel windowWidth={windowWidth}/>
                    <div className="App_content-grid d-grid">
                        <Promo windowWidth={windowWidth}/>
                        <Transactions/>
                        <Profit/>
                        <Overview/>
                        {/*<Trend windowWidth={windowWidth} data={data}/>*/}
                        <Assets data={data}/>
                        <CompareChart/>
                        <Slider/>
                    </div>
                </div>
            </div>
        );
    }
}

