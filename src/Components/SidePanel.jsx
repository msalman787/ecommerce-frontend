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

    return (
        <div className="side-panel">
            {categories.map((category, i) => (
                <div key={i}>{category}</div>
            ))}
        </div>
    )
}