
import { useState } from "react"
import "../stylesheets/SlidingImageCard.css"

const ButtonRow = ({ index, setIndex, numButtons }) => {
    const style = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        justifyContent: "space-around",
    }

    const handleClick = (curI) => {
        return (e) => {
            setIndex(curI)
        }
    }

    return (
        <div className="sliding-image-card-buttons" style={style}>
            {Array(numButtons).fill(null).map((_, i) => {
                return i !== index ?
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" onClick={handleClick(i)}>
                        <circle opacity="0.5" cx="6" cy="6" r="6" fill="gray" />
                    </svg> :
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" onClick={handleClick(i)}>
                        <circle cx="7" cy="7" r="5" fill="#DB4444" />
                        <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="2" />
                    </svg>
            })}
        </div>
    )
}

export default function SlidingImageCard({ imageUrls, width, height }) {
    const [curIndex, setCurIndex] = useState(0)

    const style = {
        width,
        height,
    }

    return (
        <div className="sliding-image-card" style={style}>
            {imageUrls.map((image, i) => {
                return i === curIndex ? <img key={i} className="sliding-image-card" src={image} /> : null
            })}
            <div className="sliding-image-card-buttons-wrapper">
                <ButtonRow index={curIndex} setIndex={setCurIndex} numButtons={imageUrls.length} />
            </div>
        </div>
    )
}