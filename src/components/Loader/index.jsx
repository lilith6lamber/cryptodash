import './index.scss'
import Lottie from "lottie-react";
export default function Loader({className, animation}) {
    return (
        <Lottie className={`${className} loader`}
                animationData={animation}
                loop="loop"
                autoplay="autoplay"
                width="100%"
                height="100%"
        />
    )
}