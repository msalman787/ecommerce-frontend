import { useNavigate } from "react-router-dom"
import "../stylesheets/ShopNow.css"

export default function ShopNow({ link }) {
    const navigate = useNavigate()

    return (
        <div className="shop-now-card" onClick={() => navigate(link)}>
            Shop Now
        </div>
    )
}