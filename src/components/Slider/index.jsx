import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay} from "swiper";
import {CgArrowsExchangeAlt} from 'react-icons/cg'
import {FiArrowUpCircle} from 'react-icons/fi'
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIos} from 'react-icons/md'
import 'swiper/css';

export default function Slider({data}) {
    return (
        <div className="exchange">
            <Swiper
                className="exchange_slider"
                spaceBetween={20}
                slidesPerView={1}
                modules={[Navigation, Autoplay]}
                navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
                loop={true}
                autoplay={true}
                speed={1500}
                breakpoints={{
                    575.98: {
                        slidesPerView: 2,
                    },
                    991.98: {
                        slidesPerView: 3,
                    },
                    1199.98: {
                        slidesPerView: 4,
                    },
                }}
            >
                {
                    Object.keys(data).map(key => {
                        const {symbol, changePrice, changePercent, graph} = data[key];
                        return (
                            <SwiperSlide key={`${symbol}_slide`} className="exchange_slider-slide card">
                                <div className="exchange_slider-slide_header d-flex align-items-center justify-content-between">
                                    <div className="currencies">
                                        {symbol}
                                        <span className="icon"><CgArrowsExchangeAlt/></span>
                                        USD
                                    </div>
                                    <div className={changePercent > 0 ? 'ascending percentage' : 'descending percentage'}>
                                        <span className="icon"><FiArrowUpCircle/></span>
                                        {changePercent.toFixed(1)}
                                    </div>
                                </div>
                                <div className="exchange_slider-slide_main">
                                    <span className="last-exchange">{changePrice.toFixed(2)}</span>
                                    <div className="graph">
                                        <img className="graph_img" src={graph} alt="graph" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <div className="exchange_slider-nav d-flex justify-content-between">
                    <button className="control swiper-button-prev" type="button">
                        <MdOutlineArrowBackIos />
                    </button>
                    <button className="control swiper-button-next" type="button">
                        <MdOutlineArrowForwardIos />
                    </button>
                </div>
            </Swiper>
        </div>
    )

}