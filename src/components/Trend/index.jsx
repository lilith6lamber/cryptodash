import './index.scss'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';

export default function Trend({data, windowWidth}) {
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
                        Object.keys(data).map(key => {
                            return (
                                <li key={data[key].symbol} className="trend_table-info_item">
                                    <span className="coin-id">{data[key].symbol.toUpperCase()}
                                        <span className="coin-name">{windowWidth >= 475 ? data[key].name : null}</span>
                                    </span>
                                    <span className="coin-price">${data[key].last}</span>
                                    <span className="coin-change">
                                        {data[key].change.toFixed(3)}
                                        {
                                            data[key].change > 0 ?
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