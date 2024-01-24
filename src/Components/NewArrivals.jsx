import NewSingleArrival from "./NewSingleArrival"

import "../stylesheets/NewArrivals.css"
import { useQuery } from "@tanstack/react-query"
import { fetchFlyers } from "../services/fetchFlyers"

export default function NewArrivals() {
    const { isPending, data } = useQuery({
        queryKey: ['newArrivals'],
        queryFn: fetchFlyers('new-arrival'),
        refetchOnWindowFocus: false,
    })

    if (isPending || !data) {
        console.log("pending")
        return <div></div>
    }

    return (
        <div className="new-arrivals-images-container">
            <NewSingleArrival title={"PlayStation 5"} body={"Black and White version of the PS5 coming out on sale."} shopLink={"/products"} imageUrl={data[1].image} containerNum={1} />
            <NewSingleArrival title={"Women’s Collections"} body={"Featured woman collections that give you another vibe."} shopLink={"/products"} imageUrl={data[2].image} containerNum={2} />
            <NewSingleArrival title={"Speakers"} body={"Amazon wireless speakers"} shopLink={"/products"} imageUrl={data[0].image} containerNum={3} />
            <NewSingleArrival title={"Perfume"} body={"GUCCI INTENSE OUD EDP"} shopLink={"/products"} imageUrl={data[3].image} containerNum={4} />
        </div>

    )
}
