import SlidingImageCard from "./SlidingImageCard"
import SidePanel from "./SidePanel"
import ProductCard from "./ProductCard"
import RedButton from "./RedButton"
import CountDown from "./CountDown"
import CategoryTitle from "./CategoryTitle"
import MoveButton from "./MoveButton"
import Footer from "./Footer"
import NewArrivals from "./NewArrivals"
import ButtomIcons from "./BottomIcons"
import ProductView from "./ProductView"

import { fetchFlyers } from "../services/fetchFlyers"
import { useQuery } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"

import "../stylesheets/Home.css"

export default function Home({ products }) {
    const queryClient = useQueryClient()

    const mainFlyers = useQuery({
        queryKey: ['mainFlyers'],
        queryFn: fetchFlyers('main'),
        refetchOnWindowFocus: false,
    })

    if (mainFlyers.isPending || products === undefined || products.isPending) {
        return <div>Loading...</div>
    }

    return (
        <div className="home">
            <div className="main">
                <SidePanel />
                <SlidingImageCard imageUrls={mainFlyers.data.map(obj => obj['image'])} width="70vw" height="21.5rem" />
            </div>
            <div className="today-card">
                <CategoryTitle topTitle="Today's" bottomTitle="" />
                <CountDown />
            </div>
            <div>
                <ProductView products={products.data} />
            </div>
            <ProductCard price={200} discount={0.8} title="hello" imageUrl="#" reviewNum={94} reviewRating={3.3} />
            <RedButton text="hello there" />
            <CategoryTitle topTitle="top title" bottomTitle="bottom title" />
            <MoveButton direction="left" />
            <MoveButton direction="right" />
            <NewArrivals />
            <ButtomIcons />
            <Footer />
        </div>
    )
}