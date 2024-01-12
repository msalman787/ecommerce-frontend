import "../stylesheets/TopHeader.css"

export default function TopHeader({ text }) {

    return (
        <div className="top-header">
            {text}<a>Show Now</a>
        </div>
    )
}