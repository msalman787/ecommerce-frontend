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

const imageUrls = [
    "../../public/SlidingImageCard/1.jpg",
    "../../public/SlidingImageCard/2.jpg",
    "../../public/SlidingImageCard/3.jpg",
    "../../public/SlidingImageCard/4.jpg",
    "../../public/SlidingImageCard/5.jpg",
]

export default function Home() {

    return (
        <div className="home">
            <SidePanel />
            <SlidingImageCard imageUrls={imageUrls} width="55.75rem" height="21.5rem" />
            <ProductCard price={200} discount={0.8} title="hello" imageUrl="#" reviewNum={94} reviewRating={3.3} />
            <RedButton text="hello there" />
            <CountDown />
            <CategoryTitle title1="top title" title2="bottom title" />
            <MoveButton direction="left" />
            <MoveButton direction="right" />
            <NewArrivals />
            <ButtomIcons />
            <Footer />
        </div>
    )
}