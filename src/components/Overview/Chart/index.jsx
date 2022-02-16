import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {kFormatter} from "../../../js/helpers";
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
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={period}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
            >
                <defs>
                    <linearGradient
                        id="btc"
                        x1="551.517" y1="45.1294" x2="15.2314" y2="46.5907"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#7517F8" />
                        <stop offset="100%" stopColor="#E323FF" />
                    </linearGradient>
                    <linearGradient
                        id="eth"
                        x1="559.503" y1="-24.3192" x2="22.1685" y2="-24.3192"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#4DFFDF" />
                        <stop offset="100%" stopColor="#4DA1FF" />
                    </linearGradient>
                    <linearGradient
                        id="ltc"
                        x1="559.503" y1="46.8789" x2="110.956" y2="37.2237"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="#E323FF" />
                        <stop offset="100%" stopColor="#7517F8" />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis tickFormatter={tick => {return kFormatter(tick)}}/>
                <Tooltip
                    content={({ payload, label }) => (
                        <CustomTooltip
                            payload={payload}
                            label={label}
                            gradientColor="#fff"
                        />
                    )}
                />
                {period.map((s) => (
                    <>
                        <Line dataKey={s.data.index.map(i => i)}
                              data={s.data}
                              name={s.name}
                              key={`${s.name}_index`}
                              stroke="url(#eth)"
                              fill="url(#eth)"
                        />
                        <Line dataKey="data.price[0]" data={s.data} name={s.name} key={`${s.name}_price`} stroke="url(#btc)" fill="url(#btc)" />
                        <Line dataKey="data.volumes[0]" data={s.data} name={s.name} key={`${s.name}_volumes`} stroke="url(#ltc)" fill="url(#ltc)" />
                    </>
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
}