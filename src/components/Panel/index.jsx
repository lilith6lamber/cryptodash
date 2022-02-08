import './index.scss'
import {RiArrowLeftSLine} from 'react-icons/ri'
import {BiBell} from 'react-icons/bi'
import {IoMdSearch} from 'react-icons/io'
import avatar from '../../assets/avatar.png'

//TODO: search with loader (dots?)

export default function Panel({windowWidth}) {
    const handleSearch = (e) => {
        e.preventDefault();
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