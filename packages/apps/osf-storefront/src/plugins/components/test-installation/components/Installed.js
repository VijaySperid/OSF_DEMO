import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
let element;
const Installed = (props) => {
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
        element = document.getElementById("installation-slider");
    }, []);

    const handleNextClick = () => {
        if( currentStep < element.children.length ) {
            document.getElementById(currentStep).scrollIntoView({
                behavior: 'smooth'
            });
            setCurrentStep(currentStep+1);
        }
        setIsNextClicked(true);
    }

    const handlePrevClick = () => {
        if( currentStep > 0 ) {
            if ( isNextClicked ) {
                document.getElementById(currentStep-2).scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                document.getElementById(currentStep-1).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        if( currentStep > 1 ) setCurrentStep(currentStep-1);
        setIsNextClicked(false);
    }


  return (
    <div className='installed-section-new'>
    {props.metaData && props.metaData.x_explainerImage2 ? (
        <div>
            <div id="installation-slider-new">
                <div
                className='installation-product'
                dangerouslySetInnerHTML={{
                    __html: props.metaData.x_explainerImage2
                }}
                style={{ display: 'none' }}
                >
                </div>
                <Slider {...settings}>
                {
                    element && element.children.length ?
                    Object.values(element.children).map((x, index) => (
                        <div 
                            id={index} 
                            key={index} 
                            dangerouslySetInnerHTML={{
                            __html: x.innerHTML
                            }}
                        >
                        {/* {element.children[0]} */}
                        </div>
                    )) : ''
                }
                </Slider>
            </div>
            {/* <div className={element &&element.children && element.children.length > 1 ? 'arrow-section visible' : 'not-visible'}>
                <img alt="arrow-1" src="/file/general/chevron-right.svg" onClick={handlePrevClick} className="prev-icon" />
                <img alt="arrow-2" src="/file/general/chevron-right.svg" onClick={handleNextClick} />
            </div> */}
        </div>
    )
    : ''}
</div>
  );
};

export default Installed;
