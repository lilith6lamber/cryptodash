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
        data: this.props.data
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, SS) {
        if (this.props.data !== prevProps.data) {
            this.setState({data: this.props.data})
        }
    }

    // calculate = () => {
    //     for (let i = 0; i < filterArr.length; i++) {
    //         for (let key in assets) {
    //             if (key === filterArr[i].symbol) {
    //                 updateArr((prevState) => {
    //                     prevState.map(item => (
    //                         item.symbol === key
    //                             ? {...item, calculated: (item.last * assets[key]).toFixed(2)}
    //                             : item
    //                     ))
    //                 })
    //             }
    //         }
    //     }
    // }

    getData = () => {
        function filter(value, deps) {
            for (let i = 0; i < deps.length; i++) {
                while (value === deps[i]) {
                    return true
                }
            }
        }

        // this.setState({data: this.state.data.filter(item => filter(item.symbol, Object.keys(this.state.assets)))})
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