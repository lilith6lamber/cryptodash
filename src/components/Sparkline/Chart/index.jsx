import { LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {kFormatter} from "../../../js/helpers";
import moment from "moment";

export default function Chart({selection, colorKey}) {
    const formattedData = selection
        .map((price, idx) => {
            if (idx % 6 === 0) {
                const timeToSubtract = 168 - idx;
                const date = moment()
                    .subtract(timeToSubtract, "hours")
                    .format("ddd h:mma");
                return { price: price.toFixed(4), date };
            } else if (idx === selection.length - 1) {
                const date = moment().format("ddd h:mma");
                return { price: price.toFixed(4), date };
            }
            return null;
        })
        .filter(data => data);
    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart width={1100} height={300} data={formattedData}  margin={{ top: 10, right: 0, left: -30, bottom: 0 }}>
                <defs>
                    <linearGradient id="btc"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1">
                        <stop offset="10%" stopColor="#7517F8"/>
                        <stop offset="100%" stopColor="#E323FF" />
                    </linearGradient>
                    <linearGradient id="eth"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1">
                        <stop offset="10%" stopColor="#E323FF"/>
                        <stop offset="100%" stopColor="#7517F8" />
                    </linearGradient>
                    <linearGradient id="sol"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1">
                        <stop offset="0%" stopColor="#4DFFDF"/>
                        <stop offset="100%" stopColor="#4DA1FF" />
                    </linearGradient>
                    <linearGradient id="ltc"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1">
                        <stop offset="0%" stopColor="#4DA1FF"/>
                        <stop offset="100%" stopColor="#4DFFDF" />
                    </linearGradient>
                    <linearGradient id="dot"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1">
                        <stop offset="0%" stopColor="#4DA1FF"/>
                        <stop offset="100%" stopColor="#4DFFDF" />
                    </linearGradient>
                    <linearGradient id="ada"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1">
                        <stop offset="0%" stopColor="#090979"/>
                        <stop offset="100%" stopColor="#00d4ff" />
                    </linearGradient>
                </defs>
                <Line type="monotone" dataKey="price" stroke={`url(#${colorKey})`} strokeWidth="5px" dot={false} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" interval={4}   />
                <YAxis tickFormatter={tick => {return kFormatter(tick)}} />
                <Tooltip wrapperClassName="recharts-tooltip" labelClassName="recharts-tooltip-label" />
            </LineChart>
        </ResponsiveContainer>
    );
}