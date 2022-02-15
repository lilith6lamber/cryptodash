import './index.scss'
import Chart from "./Chart";
import Select from "react-select/base";
import data from './data.json'

export default function Overview() {
    const periods = ["daily", "weekly", "monthly"];

    const getSelectedPeriod = (e) => {
        e.preventDefault();
    }
    return (
        <div className="overview card">
            <div className="overview_header">
                <h4 className="overview_header-title card-title">Market Overview</h4>
                <Select
                    classNamePrefix="Select"
                    className="period-select"
                    placeholder="placeholder"
                    onChange={getSelectedPeriod}
                    options={periods.map(item => <option value={item}>{item}</option>)}
                >
                </Select>
            </div>
            <div className="overview_chart">
                <Chart period={data.day} />
            </div>
        </div>
    )
}
