import './index.scss'
import Lottie from "lottie-react";
import loader from '../../assets/dotsloader.json'

export default function DotsLoader({className}) {
    return (
        <Lottie className={className}
                animationData={loader}
                loop="loop"
                autoplay="autoplay"
                width="100%"
                height="100%"
        />
    )
}