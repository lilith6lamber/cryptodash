import './index.scss'
import Lottie from "lottie-react";
import gears from '../../assets/gears.json'

//TODO: make one component for Lottie

export default function PageLoader({className}) {
    return (
        <Lottie className={className}
                animationData={gears}
                loop="loop"
                autoplay="autoplay"
                width="100%"
                height="100%"
        />
    )
}