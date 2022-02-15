import './index.scss'
import Chart from "./Chart";
import {StyledSelect} from "../Select";
import data from './data.json'
import {useState} from "react";

export default function Overview() {
    const [selectedPeriod, setSelection] = useState("daily");
    const periods = [
        {value: "daily", label: "daily"},
        {value: "weekly", label: "weekly"},
        {value: "monthly", label: "monthly"}
    ];

    const getSelectedPeriod = (e) => {
        setSelection(e.value)
    }
    return (
        <div className="overview card">
            <div className="overview_header">
                <h4 className="overview_header-title card-title">Market Overview</h4>
                <StyledSelect
                    classNamePrefix="Select"
                    className="converter_form-select"
                    placeholder={selectedPeriod}
                    onChange={getSelectedPeriod}
                    options={periods}
                    isSearchable={false}
                    hideSelectedOptions={true}
                >
                </StyledSelect>
            </div>
            <div className="overview_chart">
                <Chart period={data.day}/>
            </div>
        </div>
    )
}
