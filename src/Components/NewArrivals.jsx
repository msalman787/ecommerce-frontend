import NewSingleArrival from "./NewSingleArrival"
import CategortyTitle from "./CategoryTitle"

import "../stylesheets/NewArrivals.css"

export default function NewArrivals() {

    return (
        <div className="new-arrivals-images-container">
            <NewSingleArrival title={"PlayStation 5"} body={"Black and White version of the PS5 coming out on sale."} shopLink={"#"} imageUrl={"#"} containerNum={1} />
            <div className="flex-1">
                <NewSingleArrival title={"Women’s Collections"} body={"Featured woman collections that give you another vibe."} shopLink={"#"} imageUrl={"#"} containerNum={2} />
                <div className="flex-1">
                    <NewSingleArrival title={"Speakers"} body={"Amazon wireless speakers"} shopLink={"#"} imageUrl={"#"} containerNum={3} />
                    <NewSingleArrival title={"Perfume"} body={"GUCCI INTENSE OUD EDP"} shopLink={"#"} imageUrl={"#"} containerNum={4} />
                </div>
            </div>
        </div>

    )
}
