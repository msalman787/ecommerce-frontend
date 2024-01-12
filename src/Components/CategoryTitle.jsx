import "../stylesheets/CategoryTitle.css"

export default function CategoryTitle({ topTitle, bottomTitle }) {

    return (
        <div className="category-title">
            <div className="top-title">
                <span></span><span>{topTitle}</span>
            </div>
            <div className="bottom-title">{bottomTitle}</div>
        </div>
    )
}