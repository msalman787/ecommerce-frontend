export default function upArrowSvg() {
    const style = {
        width: "24px",
        height: "24px",
        backgroundColor: "var(--secondary-gray)",
        borderRadius: "50%",
    }

    return (
        <div style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 20V4M5 11L12 4L19 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </div>
    )
}