import './index.scss'
import logo from '../../assets/logo.svg'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BsHandbag, BsHouse} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {RiLogoutBoxLine} from 'react-icons/ri'

export default function Sidebar() {
    return (
        <div className="sidebar d-flex flex-md-column align-items-center justify-content-between">
            <span className="sidebar_logo">
                <img className="sidebar_logo-img" src={logo} alt="Crypto"/>
            </span>
            <nav className="sidebar_nav">
                <ul className="sidebar_nav-menu d-flex flex-md-column">
                    <li className="sidebar_nav-menu_item">
                        <a className="link current" href="#"><BsHouse /></a>
                    </li>
                    <li className="sidebar_nav-menu_item">
                        <a className="link" href="#"><AiOutlinePieChart /></a>
                    </li>
                    <li className="sidebar_nav-menu_item">
                        <a className="link" href="#"><BsHandbag /></a>
                    </li>
                    <li className="sidebar_nav-menu_item">
                        <a className="link" href="#"><FiSettings /></a>
                    </li>
                </ul>
            </nav>
            <a className="link" href="#"><RiLogoutBoxLine /></a>
        </div>
    )
}