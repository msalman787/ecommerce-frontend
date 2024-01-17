import LeftRightButton from './LeftRightButton'
import { useState, cloneElement } from 'react'

export default function ScrollWrapper({ children, maxOffset }) {
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
            <div style={{ position: 'absolute', top: '-5vw', right: '0' }}>
                <LeftRightButton leftFn={scrollLeft} rightFn={scrollRight} />
            </div>
        </div>
    )
}