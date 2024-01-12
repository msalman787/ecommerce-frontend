import ShopNow from "./ShopNow"
import "../stylesheets/NewSingleArrival.css"
import combineClasses from "../utils/combineClasses.js"

export default function NewSingleArrival({ title, body, shopLink, imageUrl, containerNum }) {

    return (
        <div className={combineClasses(["single-new-arrival-container", `container-${containerNum}`])}>
            <img src={imageUrl} />
            <div>{title}</div>
            <div>{body}</div>
            <ShopNow link={shopLink} />
        </div>
    )
}