import Lottie from "lottie-react";
import success from '../../assets/success.json'

export default function Success({className}) {
    return (
        <Lottie className={className}
                animationData={success}
                loop="loop"
                autoplay="autoplay"
                width="100%"
                height="100%"
        />
    )
}