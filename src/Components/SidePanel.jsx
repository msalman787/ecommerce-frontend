import { useNavigate } from "react-router-dom"
import "../stylesheets/SidePanel.css"

const categories = [
    "Women's fashion",
    "Men's fasion",
    'Electronics',
    'Home and lifestyle',
    'Medicine',
    'Sports and outdoor',
    "Baby's and toys",
    "Groceries and pets",
    "Health and beautfy",
]

export default function SidePanel() {
    const navigate = useNavigate()

    return (
        <div className="side-panel">
            {categories.map((category, i) => (
                <div key={i} onClick={() => navigate('/products')}>{category}</div>
            ))}
        </div>
    )
}