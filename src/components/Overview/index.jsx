import './index.scss'
import Chart from "./Chart";
import data from './data.json'

export default function Overview() {
    return (
        <div className="overview card">
            <div className="overview_header">
                <h4 className="overview_header-title card-title">Market Overview</h4>
            </div>
            <div className="overview_chart">
                <Chart period={data.day} />
            </div>
        </div>
    )
}
