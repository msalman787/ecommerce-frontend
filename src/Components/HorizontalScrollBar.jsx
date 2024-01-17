import ScrollWrapper from './ScrollWrapper';
import HorizontalProductBar from './HorizontalProductBar';

export default function HorizontalScrollBar({ products, offsetWidth = 100 }) {

    return (
        <ScrollWrapper maxOffset={products.length - 3}>
            <HorizontalProductBar products={products} offsetWidth={offsetWidth} />
        </ScrollWrapper>
    )
}