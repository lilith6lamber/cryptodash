import './index.scss'
import {RiArrowLeftSLine} from 'react-icons/ri'
import {BiBell} from 'react-icons/bi'
import {IoMdSearch} from 'react-icons/io'
import avatar from '../../assets/avatar.png'
import DotsLoader from "../DotsLoader";
import {useState} from "react";

//TODO: search with loader (dots?)

export default function Panel({windowWidth}) {
    const [isLoading, setLoading] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        setInterval(() => setLoading(false), 1500);
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
                >
                    <input className="field" type="search" placeholder="Search" />
                    {
                        isLoading ?
                            <DotsLoader className={"dotsLoader show"} />
                            :
                            <DotsLoader className={"dotsLoader show"} />
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