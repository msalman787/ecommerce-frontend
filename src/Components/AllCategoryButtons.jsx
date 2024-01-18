import PhoneSvg from './svgComponents/PhoneSvg';
import ComputerSvg from './svgComponents/ComputerSvg';
import CameraSvg from './svgComponents/CameraSvg';
import GamingSvg from './svgComponents/GamingSvg';

import "../stylesheets/AllCategoryButtons.css";

const ButtonWrapper = ({ children, title }) => {

    return (
        <div className='center-child button-wrapper' style={{ flexDirection: 'column' }}>
            {children}
            <div>{title}</div>
        </div>
    )
}

export default function AllCategoryButtons() {
    const style = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5rem',
    }

    return (
        <div className="all-category-buttons" style={style}>
            <ButtonWrapper title="Phones">
                <PhoneSvg />
            </ButtonWrapper>
            <ButtonWrapper title="Computers">
                <ComputerSvg />
            </ButtonWrapper>
            <ButtonWrapper title="Cameras">
                <CameraSvg />
            </ButtonWrapper>
            <ButtonWrapper title="Gaming">
                <GamingSvg />
            </ButtonWrapper>
        </div>
    )
}