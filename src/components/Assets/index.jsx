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
        modifiedData: {}
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
        for (let assetKey in assets) {
            for (let dataKey in data) {
                // assetKey === data[dataKey].symbol ? '' : ''
            }
        }
        //this.state.data[someKey].symbol = this.state.assets[anotherKey]
        for (let i = 0; i < this.state.data.length; i++) {
            console.log(Object.entries(this.state.data)[i])
            for (let key in this.state.assets) {
                // Object.entries(this.state.data[i])
            }
        }
    }

    calculate = () => {
        for (let key in this.state.assets) {
            if (key === this.state.data[key]) {
                console.log(this.state.assets[key] * this.state.data[key].last)
                return this.state.assets[key] * this.state.data[key].last
            }
        }
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
                    {/*{*/}
                    {/*    filterArr.map(item => {*/}
                    {/*        const {img, symbol, name, calculated} = item;*/}
                    {/*        return (*/}
                    {/*            <li className="assets_list-item d-flex" key={`${symbol}_assets`}>*/}
                    {/*                    <span className="image">*/}
                    {/*                        <img src={img} alt={name}/>*/}
                    {/*                    </span>*/}
                    {/*                <span className="name d-flex flex-column">*/}
                    {/*                        <span className="name_name">{name}</span>*/}
                    {/*                        <span className="name_symbol">{symbol}</span>*/}
                    {/*                    </span>*/}
                    {/*                <span className="balance d-flex flex-column">*/}
                    {/*                        <span className="balance_coin">{assets[symbol]}</span>*/}
                    {/*                        <span className="balance_calculated">{calculated}</span>*/}
                    {/*                    </span>*/}
                    {/*            </li>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </ul>
            </div>
        )
    }
}