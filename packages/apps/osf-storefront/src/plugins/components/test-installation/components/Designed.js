import React, {useEffect, useState} from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let element;
const Designed = props => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [currentStep, setCurrentStep] = useState(1);
    const [ isNextClicked, setIsNextClicked ] = useState(false);
 
    useEffect(() => {
        element = document.getElementsByClassName("carousel-inner");
        // console.log('sddd', Object.values(element[0].children));
    }, []);

    const handleNextClick = () => {
        // console.log('clicked', currentStep);
        if( currentStep < element[0].children.length ) {
            document.getElementById(`design-${currentStep}`).scrollIntoView({
                behavior: 'smooth'
            });
            // console.log('dd', `design-${currentStep}`, document.getElementById(`design-${currentStep}`));
            setCurrentStep(currentStep+1);
        }
        setIsNextClicked(true);
    }

    const handlePrevClick = () => {
        if( currentStep > 0 && currentStep-1 > 0) {
            if ( isNextClicked && currentStep-2 >= 0 ) {
                document.getElementById(`design-${currentStep-2}`).scrollIntoView({
                    behavior: 'smooth'
                });
                // console.log('dd', `design-${currentStep-2}`, document.getElementById(`design-${currentStep-2}`));
            } else {
                document.getElementById(`design-${currentStep-1}`).scrollIntoView({
                    behavior: 'smooth'
                });
                // console.log('dd', `design-${currentStep-1}`, document.getElementById(`design-${currentStep-1}`));
            }
        }
        if( currentStep > 0 ) setCurrentStep(currentStep-1);
        setIsNextClicked(false);
    }

    return (
        <div style={{ position: 'relative' }}>
            {

        props.metaData ? 
            (
            <div>
                <div style={{ display: 'flex', overflow: 'scroll' }}>
                    <div
                        className='carousel-product not-visible'
                        dangerouslySetInnerHTML={{
                            __html: props.metaData.x_explainerImage1
                        }}>
                    </div>
                    <Slider {...settings}>
                    {
                            element && element[0].children && element[0].children.length ?
                            Object.values(element[0].children).map((x, index) => (
                                <div 
                                    id={`design-${index}`} 
                                    key={index} 
                                    dangerouslySetInnerHTML={{
                                    __html: x.innerHTML
                                    }}
                                >
                                </div>
                            )) : ''
                        }
                    </Slider>
                </div> 
                {/* <div  className={element && element[0].children && element[0].children.length > 1 ? 'arrow-section visible' : 'not-visible'}>
                    <img alt="arrow-1" src="/file/general/chevron-right.svg" onClick={handlePrevClick} className="prev-icon" />
                    <img alt="arrow-2" src="/file/general/chevron-right.svg" onClick={handleNextClick} />
                </div> */}
                </div>
            )
            :
            ''
            }
        </div>
    )

}

export default Designed;