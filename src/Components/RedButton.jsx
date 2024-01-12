import "../stylesheets/RedButton.css"

export default function RedButton({ width = "fit-content", height = "fit-content", children = null, text, clickFn }) {

    return (
        <button className="red-button" style={{ width, height }} onClick={clickFn}>
            {children}
            <div className="button-text">{text}</div>
        </button>
    )
}