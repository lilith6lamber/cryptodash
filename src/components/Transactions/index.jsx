import './index.scss'
import {FaRegPaperPlane} from 'react-icons/fa'
import {FiPlus} from 'react-icons/fi'
import girl from '../../assets/girl.png'
import boy from '../../assets/boy.png'
import {useState, useEffect} from "react";
import Success from "../Success";

export default function Transactions() {
    const [transactionValue, setValue] = useState('');
    const [userPicked, getPick] = useState(false);
    const [status, setStatus] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleTransfer = (e) => {
        e.preventDefault();
        simulateTransfer();
    }

    const simulateTransfer = () => {
        setSuccess(true);
        setTimeout(() => {
            document.querySelector('#amount').value = '';
            document.querySelectorAll('input[name="friend"]').forEach(el => el.checked = false)
            setValue('');
            getPick(false);
            setSuccess(false);
        }, 3000);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        if (transactionValue !== '' && userPicked === true) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }, [transactionValue, userPicked]);


    return (
        <div className="transactions card d-flex flex-column justify-content-between">
            <h4 className="transactions_title card-title">Quick Transfer</h4>
            <ul className="transactions_list d-flex flex-grow-1">
                <li className="transactions_list-item">
                    <div className="link">
                        <input type="radio"
                               id="girl"
                               name="friend"
                               onChange={() => getPick(true)}
                        />
                        <label className="friend" htmlFor="girl">
                            <img src={girl} alt="girl avatar"/>
                        </label>
                    </div>
                </li>
                <li className="transactions_list-item">
                    <div className="link">
                        <input type="radio"
                               id="boy"
                               name="friend"
                               onChange={() => getPick(true)}
                        />
                        <label className="friend" htmlFor="boy">
                            <img src={boy} alt="boy avatar"/>
                        </label>
                    </div>
                </li>
                <li className="transactions_list-item">
                    <a className="add link" href="#">
                        <FiPlus />
                    </a>
                </li>
            </ul>
            <form className="transactions_form d-flex flex-column"
                  action="#"
                  method="post"
                  onSubmit={handleTransfer}>
                <div className="wrapper d-flex align-items-center">
                    <label className="transactions_form-label"
                           htmlFor="amount">Amount:
                        <span className="sign">$</span>
                    </label>
                    <input className="transactions_form-input"
                           type="number"
                           id="amount"
                           placeholder="1.00"
                           onChange={handleChange}
                    />
                </div>
                <button className="transactions_form-btn d-flex align-items-center justify-content-center"
                        type="submit"
                        disabled={!status}
                >
                    {
                        success ? <Success className="success"/> : <><FaRegPaperPlane /> Transfer Now</>
                    }

                </button>
            </form>
        </div>
    )
}