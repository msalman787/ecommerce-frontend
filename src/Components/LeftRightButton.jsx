import MoveButton from "./MoveButton"

export default function LeftRightButton({ leftFn, rightFn }) {
    return (
        <div className="left-right-wrapper" style={{ display: 'flex', gap: '0.5rem' }}>
            <MoveButton direction="left" handleClick={leftFn} />
            <MoveButton direction="right" handleClick={rightFn} />
        </div>
    )
}