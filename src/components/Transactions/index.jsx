import './index.scss'
import {FaRegPaperPlane} from 'react-icons/fa'
import {FiPlus} from 'react-icons/fi'
import girl from '../../assets/girl.png'
import boy from '../../assets/boy.png'

// TODO: loader inside btn
// TODO: friends pick to radio btn

export default function Transactions() {
    const handleTransfer = (e) => {
        e.preventDefault();
    }

    return (
        <div className="transactions card">
            <h4 className="transactions_title card-title">Quick Transfer</h4>
            <ul className="transactions_list d-flex">
                <li className="transactions_list-item">
                    <a className="friend link" href="#">
                        <img src={girl} alt="girl avatar"/>
                    </a>
                </li>
                <li className="transactions_list-item">
                    <a className="friend link" href="#">
                        <img src={boy} alt="boy avatar"/>
                    </a>
                </li>
                <li className="transactions_list-item">
                    <a className="add link" href="#">
                        <FiPlus />
                    </a>
                </li>
            </ul>
            <form className="transactions_form" action="#" method="post" onSubmit={handleTransfer}>
                <label className="transactions_form-label" htmlFor="amount">Amount:</label>
                <input className="transactions_form-input" type="number" id="amount" placeholder="1.00"/>
                <button className="transactions_form-btn d-flex align-items-center justify-content-center" type="submit">
                    <FaRegPaperPlane /> Transfer Now
                </button>
            </form>
        </div>
    )
}