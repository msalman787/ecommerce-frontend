import "../stylesheets/ShopNow.css"

export default function ShopNow({ link }) {
    return (
        <div className="shop-now-card" onClick={() => console.log(link)}>
            Shop Now
        </div>
    )
}