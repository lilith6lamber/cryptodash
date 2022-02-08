import './index.scss'
import {FaRegPaperPlane} from 'react-icons/fa'

// TODO: clean assets bg

export default function Transactions() {
    return (
        <div className="transactions card">
            <h4 className="transactions_title card-title">Quick Transfer</h4>
            <ul className="transactions_list">
                <li className="transactions_list-item">
                    <a href="#">

                    </a>
                </li>
            </ul>
            <a className="transactions_btn d-flex align-items-center justify-content-center" href="#">
                <FaRegPaperPlane /> Transfer Now
            </a>
        </div>
    )
}