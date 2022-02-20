import './index.scss'
import Atropos from 'atropos/react';

import black from '../../assets/black.png'
import blue from '../../assets/blue.png'
import prism from '../../assets/prism.png'
import pink from '../../assets/pink.png'
import green from '../../assets/green.png'
import white from '../../assets/white.png'

export default function Promo({windowWidth}) {
    return (
        <Atropos className="promo atropos my-atropos" activeOffset={100} rotateXMax={1} rotateYMax={1} >
            <div className="atropos-scale">
                <div className="atropos-rotate">
                    <div className="atropos-inner">
                        <div className="content d-md-flex">
                            <div className="promo_main">
                                <h5 className="promo_main-subtitle" data-atropos-offset="2">Ethereum 2.0</h5>
                                <h3 className="promo_main-title" data-atropos-offset="3">Your Gateway into Blockchain</h3>
                                <p className="promo_main-text" data-atropos-offset="2">Paronia is a blockchain platform. We make blockchain accessible.</p>
                                <a className="promo_main-btn" data-atropos-offset="-2" href="#">Learn More.</a>
                            </div>
                            {
                                windowWidth >= 767.98 ?
                                    <div className="promo_media flex-grow-1">
                                        <img className="blue" src={blue} data-atropos-offset="4" alt="blue"/>
                                        <img className="black" src={black} data-atropos-offset="5" alt="black"/>
                                        <img className="pink" src={pink} data-atropos-offset="3" alt="pink"/>
                                        <img className="white" src={white} data-atropos-offset="5" alt="white"/>
                                        <img className="green" src={green} data-atropos-offset="2" alt="green"/>
                                        <img className="prism" src={prism} data-atropos-offset="5" alt="prism"/>
                                    </div> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Atropos>
    )
}