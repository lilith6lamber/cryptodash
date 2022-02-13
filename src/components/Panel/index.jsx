import './index.scss'
import {RiArrowLeftSLine} from 'react-icons/ri'
import {BiBell} from 'react-icons/bi'
import {IoMdSearch} from 'react-icons/io'
import avatar from '../../assets/avatar.png'
import DotsLoader from "../DotsLoader";
import {useState} from "react";

export default function Panel({windowWidth}) {
    const [isLoading, setLoading] = useState(false);

    const simulateSearch = () => {
        document.querySelector(`#searchQuery`).value = '';
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            simulateSearch();
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        simulateSearch();
    }

    return (
        <div className="panel d-flex align-items-center justify-content-md-between">
            {
                windowWidth > 767.98 ?
                    <>
                        <a className="panel_nav d-inline-flex justify-content-center align-items-center" href="#">
                            <RiArrowLeftSLine/>
                        </a>
                        <h5 className="panel_page">Home</h5>
                    </>
                    : null
            }
            <div className="panel_user d-flex align-items-stretch justify-content-md-end">
                <form className="panel_user-form d-flex align-items-center form"
                      action="#"
                      method="get"
                      onSubmit={handleSearch}
                      onKeyDown={handleKey}
                >
                    <input
                        className="field"
                        id="searchQuery"
                        type="search"
                        placeholder="Search"
                        disabled={isLoading}
                    />
                    {
                        isLoading ?
                            <DotsLoader className={"dotsLoader show"} />
                            :
                            <DotsLoader className={"dotsLoader"} />
                    }
                    <button className="btn" type="submit">
                        <IoMdSearch />
                    </button>
                </form>
                <a className="panel_user-link notifications" href="#">
                    <BiBell />
                </a>
                <a className="panel_user-link profile" href="#">
                    <img src={avatar} alt="avatar"/>
                </a>
            </div>
        </div>
    )
}