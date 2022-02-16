import './index.scss'
import Chart from "./Chart";
import {StyledSelect} from "../Select";
import {Component} from "react";

export default class Overview extends Component {
    state = {
        periods: [
            {value: "daily", label: "daily"},
            {value: "weekly", label: "weekly"},
            {value: "monthly", label: "monthly"}
        ],
        selectedValue: "daily",
        data: this.props.data
    }

    getSelectedPeriod = (e) => {
        this.setState({selectedValue: e.value})
    }
    render() {
        const {selectedValue} = this.state;
        return (
            <div className="overview card">
                <div className="overview_header">
                    <h4 className="overview_header-title card-title">Market Overview</h4>
                    <StyledSelect
                        classNamePrefix="Select"
                        className="converter_form-select"
                        placeholder={this.state.selectedValue}
                        onChange={this.getSelectedPeriod}
                        options={this.state.periods}
                        isSearchable={false}
                        hideSelectedOptions={true}
                    >
                    </StyledSelect>
                </div>
                <div className="overview_chart">
                    <Chart period={
                        Object.keys(this.state.data).map(key => {
                            return {
                                name: key,
                                data: this.state.data[key][selectedValue]
                            }
                        })
                    }/>
                </div>
            </div>
        )
    }
}
