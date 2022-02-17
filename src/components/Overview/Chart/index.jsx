import { LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {kFormatter} from "../../../js/helpers";
import moment from "moment";
import data from "bootstrap/js/src/dom/data";


const CustomTooltip = ({ payload, label, gradientColor }) => (
    <div className="recharts-tooltip">
        <p className="tooltip-label">{label}</p>
        {payload.length &&
            payload.map(({ name, color, value }, index) => {
                const textColor = color.includes("url(") ? gradientColor : color;
                return (
                    <p key={index} className="tooltip-items" style={{ color: textColor }}>
                        {`${name}: ${value}`}
                    </p>
                );
            })}
    </div>
);

export default function Chart({period}) {
    const formattedData = period
        .map((price, idx) => {
            if (idx % 6 === 0) {
                const timeToSubtract = 168 - idx;
                const date = moment()
                    .subtract(timeToSubtract, "hours")
                    .format("ddd h:mma");
                return { value: price, date };
            } else if (idx === period.length - 1) {
                const date = moment().format("ddd h:mma");
                return { value: price, date };
            }
            return null;
        })
        .filter(data => data);
    console.log(formattedData)
    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart width={1100} height={300} data={formattedData}  margin={{ top: 5, right: 0, left: -30, bottom: 0 }}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" interval={5}  />
                <YAxis tickFormatter={tick => {return kFormatter(tick)}} />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
}