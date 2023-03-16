import {Link} from "react-router-dom"

export default function PaymentSuccess() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font text-4xl font-bold tracking-tight text-alt sm:text-6xl">Payment Success!</h1>
            <Link to={"/"}><img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/check-circle-green-512.png" className="max-w-1/2 h-auto object-contain" alt=""/>
        </Link>
        </div>
    )
}