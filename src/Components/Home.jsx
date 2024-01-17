import SlidingImageCard from "./SlidingImageCard"
import SidePanel from "./SidePanel"
import RedButton from "./RedButton"
import CountDown from "./CountDown"
import CategoryTitle from "./CategoryTitle"
import NewArrivals from "./NewArrivals"
import ButtomIcons from "./BottomIcons"
import HorizontalScrollBar from "./HorizontalScrollBar"
import AllCategoryButtons from "./AllCategoryButtons"

import { fetchFlyers } from "../services/fetchFlyers"
import { useQuery } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"

import "../stylesheets/Home.css"
import ProductView from "./ProductView"

export default function Home({ products }) {
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
            <article className="today-card">
                <div className="title-wrapper">
                    <CategoryTitle topTitle="Today's" bottomTitle="Flash Sale" />
                    <CountDown />
                </div>
                <HorizontalScrollBar products={products.data.filter(product => product.discount < 1)} />
            </article>
            <article className="category-card">
                <div className="title-wrapper">
                    <CategoryTitle topTitle="Categories" bottomTitle="Browse By Category" />
                </div>
                <AllCategoryButtons />
            </article>
            <article className="best-selling-card">
                <div className="title-wrapper">
                    <CategoryTitle topTitle="This months" bottomTitle="Best Selling Products" />
                </div>
                <HorizontalScrollBar products={products.data.filter(product => product.id > 5)} />
                <RedButton text="View All" />
            </article>
            <article className="our-products-card">
                <div className="title-wrapper">
                    <CategoryTitle topTitle="Our products" bottomTitle="Explore our products" />
                </div>
                <ProductView products={products.data} />
                <RedButton text="Shop all products" />
            </article>
            <article className="new-arrivals-card">
                <div className="title-wrapper">
                    <CategoryTitle topTitle="Featured" bottomTitle="New Arrivals" />
                </div>
                <NewArrivals />
            </article>
            <ButtomIcons />
        </div>
    )
}