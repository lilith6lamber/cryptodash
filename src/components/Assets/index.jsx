import './index.scss'
import {GoSearch} from "react-icons/go"
import {Component} from "react";

export default class Assets extends Component {
    state = {
        assets: {
            btc: 0.14,
            eth: 4.65,
            ltc: 15.33
        },
        data: this.props.data,
        modifiedData: []
    }

    componentDidMount() {
        this.setData();
    }

    componentDidUpdate(prevProps, prevState, SS) {
        if (this.props.data !== prevProps.data) {
            this.setState({data: this.props.data})
            this.setData();
        }
    }

    setData = () => {
        const {data, assets} = this.state;
        let arr = [];
        for (let assetKey in assets) {
            for (let dataKey in data) {
                if(assetKey === data[dataKey].symbol) {
                    arr.push({...data[dataKey],
                        calc: data[dataKey].last * assets[assetKey],
                        balance: assets[assetKey]
                    })
                }
            }
        }
        this.setState({ modifiedData: arr })
    }

    render() {
        return (
            <div className="assets card">
                <div className="assets_header d-flex align-items-center justify-content-between">
                    <h4 className="assets_header-title">Assets</h4>
                    <span className="icon">
                        <GoSearch/>
                    </span>
                </div>
                <ul className="assets_list d-flex flex-column">
                    {
                        Object.keys(this.state.modifiedData).map(item => {
                            const {img, symbol, name, calc, balance} = this.state.modifiedData[item];
                            return (
                                <li className="assets_list-item d-flex" key={`${symbol}_assets`}>
                                        <span className="image">
                                            <img src={img} alt={name}/>
                                        </span>
                                    <span className="name d-flex flex-column">
                                            <span className="name_name">{name}</span>
                                            <span className="name_symbol">{symbol}</span>
                                        </span>
                                    <span className="balance d-flex flex-column">
                                            <span className="balance_coin">{balance}</span>
                                            <span className="balance_calculated">${calc.toFixed(2)}</span>
                                        </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}