import ScrollWrapper from './ScrollWrapper';
import HorizontalProductBar from './HorizontalProductBar';

export default function HorizontalScrollBar({ products, offsetWidth = 200 }) {
    const maxTranslateX = products.length * 313 - window.innerWidth * 0.9
    const maxoffset = Math.ceil(maxTranslateX / offsetWidth)

    return (
        <ScrollWrapper maxOffset={maxoffset}>
            <HorizontalProductBar products={products} offsetWidth={offsetWidth} maxTranslateX={Math.round(maxTranslateX)} />
        </ScrollWrapper>
    )
}