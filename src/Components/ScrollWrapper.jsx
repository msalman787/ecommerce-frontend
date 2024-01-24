import LeftRightButton from './LeftRightButton'
import { useState, cloneElement } from 'react'

export default function ScrollWrapper({ children, maxOffset, showButtons = true }) {
    const [offset, setOffset] = useState(0)

    const scrollLeft = (e) => {
        setOffset(prev => Math.max(prev - 1, 0))
    }

    const scrollRight = (e) => {
        setOffset(prev => Math.min(prev + 1, maxOffset))
    }

    return (
        <div style={{ position: 'relative', width: "100%" }}>
            {cloneElement(children, { offset })}
            <div style={{ position: 'absolute', top: '-4rem', right: '0', display: showButtons ? "block" : "none" }}>
                <LeftRightButton leftFn={scrollLeft} rightFn={scrollRight} />
            </div>
        </div>
    )
}