import "../stylesheets/GrayButton.css"

export default function GrayButton({ text, clickFn }) {

    return (
        <div className="gray-button" onClick={clickFn}>
            {text}
        </div>
    )
}