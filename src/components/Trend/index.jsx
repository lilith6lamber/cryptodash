import './index.scss'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import {Component} from "react";

export default class Trend extends Component {
    state = {
        windowWidth: this.props.windowWidth,
        data: this.props.data
    }

    componentDidMount() {
        this.setState({data: this.props.data})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.windowWidth !== prevState.windowWidth) {
            this.setState({windowWidth: this.props.windowWidth})
        }
    }

    render() {
        return (
            <div className="trend card d-flex flex-column justify-content-between">
                <h4 className="trend_title card-title">Market Trend</h4>
                <div className="trend_table d-flex flex-column flex-grow-1 justify-content-between">
                    <div className="trend_table-header d-grid">
                        <span>Name</span>
                        <span>Last Price</span>
                        <span>24h Change</span>
                    </div>
                    <ul className="trend_table-info d-flex flex-column">
                        {
                            Object.keys(this.state.data).map(key => {
                                const {symbol, name, last, change} = this.state.data[key];
                                return (
                                    <li key={symbol} className="trend_table-info_item">
                                    <span className="coin-id">{symbol.toUpperCase()}
                                        <span className="coin-name">{this.props.windowWidth >= 475 ? name : null}</span>
                                    </span>
                                        <span className="coin-price">${last}</span>
                                        <span className="coin-change">
                                        {change.toFixed(2)}
                                            {
                                                change > 0 ?
                                                    <AiFillCaretUp className="ascending icon"/>
                                                    :
                                                    <AiFillCaretDown className="descending icon"/>
                                            }
                                    </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}