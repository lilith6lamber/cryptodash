import './index.scss'
import Chart from "./Chart";
import {StyledSelect} from "../Select";
import {Component} from "react";


export default class Sparkline extends Component {
    state = {
        coinsKeys: [],
        selectedValue: {},
        placeholder: "btc/usd",
        data: this.props.data,
        period: 'daily',
        hasData: false
    }

    setCoinsKeys = () => {
        let keysArr = [];
        for (let key in this.state.data) {
            keysArr.push({value: key, label: `${this.state.data[key].symbol}/USD`})
        }
        this.setState({coinsKeys: keysArr, selectedValue: keysArr[0], hasData: true})
    }

    setSelectedValue = (e) => {
        this.setState({selectedValue: {value: e.value, label: e.label}, placeholder: e.label})
    }

    setSelectedPeriod = (e) => {
        this.setState({period: e.target.value})
    }

    componentDidMount() {
        this.setCoinsKeys();
    }

    render() {
        const {selectedValue, period, placeholder, coinsKeys, hasData} = this.state;
        return (
            <div className="sparkline card">
                <div className="sparkline_header d-flex">
                    <StyledSelect
                        classNamePrefix="Select"
                        className="sparkline_header-select"
                        placeholder={placeholder}
                        onChange={this.setSelectedValue}
                        options={coinsKeys}
                        isSearchable={false}
                        hideSelectedOptions={true}
                        value={selectedValue}
                        defaultValue={selectedValue}
                    >
                    </StyledSelect>
                    <div className="sparkline_header-period d-flex">
                        <div className="radio-wrapper">
                            <input type="radio"
                                   value="daily"
                                   name="sparklinePeriod"
                                   id="sparkline_daily"
                                   checked={period === "daily"}
                                   onChange={this.setSelectedPeriod}
                            />
                            <label htmlFor="sparkline_daily">1d</label>
                        </div>
                        <div className="radio-wrapper">
                            <input type="radio"
                                   value="weekly"
                                   name="sparklinePeriod"
                                   id="sparkline_weekly"
                                   checked={period === "weekly"}
                                   onChange={this.setSelectedPeriod}
                            />
                            <label htmlFor="sparkline_weekly">1w</label>
                        </div>
                        <div className="radio-wrapper">
                            <input type="radio"
                                   name="sparklinePeriod"
                                   value="monthly"
                                   id="sparkline_monthly"
                                   checked={period === "monthly"}
                                   onChange={this.setSelectedPeriod}
                            />
                            <label htmlFor="sparkline_monthly">1m</label>
                        </div>
                    </div>
                </div>
                <div className="sparkline_wrapper">
                    <div className="sparkline_chart">
                        {
                            hasData ?
                                <Chart colorKey={this.state.data[selectedValue.value].symbol}
                                       selection={this.state.data[selectedValue.value].sparkline}/>
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
