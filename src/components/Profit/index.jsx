import './index.scss'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'

export default function Profit() {
    return (
        <div className="profit card">
            <h4 className="profit_title card-title">Profit</h4>
            <div className="profit_info">
                <div className="profit_info-block profit_info-block--income">
                    <span className="icon">
                        <AiOutlineArrowUp />
                    </span>
                    <span className="info">
                        <span className="info_amount">
                            <span className="sign">$</span>
                            <span className="amount" id="income">1892.25</span>
                        </span>
                        <span className="label">Income</span>
                    </span>
                </div>
                <div className="profit_info-block profit_info-block--expenses">
                    <span className="icon">
                        <AiOutlineArrowDown />
                    </span>
                    <span className="info">
                        <span className="info_amount">
                            <span className="sign">$</span>
                            <span className="amount" id="income">387.47</span>
                        </span>
                        <span className="label">Expenses</span>
                    </span>
                </div>
            </div>
        </div>
    )
}