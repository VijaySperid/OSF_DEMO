import React, {useEffect, useState} from 'react';

const metaData = [
    {
        category: 'primary',
        specification: [
            {
                title: 'unit',
                desc: '470 x 354 x 500 mm'
            },
            {
                title: 'net weight',
                desc: '24kg'
            }
        ]
    },
    {
        category: 'capacity',
        specification: [
            {
                title: 'unit',
                desc: '470 x 354 x 500 mm'
            },
            {
                title: 'net weight',
                desc: '24kg'
            }
        ]
    }
]

const Specifications = props => {

    const [ isVisible, setIsVisible ] = useState([]);

    const handleVisibleClick = (i) => {
        if(isVisible.includes(i)) {
            const newArr = isVisible.filter(x => x !== i);
            setIsVisible(newArr);
        } else {
          setIsVisible([...isVisible, i]);
        }
    }
     

    return (
        <div className='specification'>
            <h3>Specifications</h3>
            <p className='sub-title'>You are viewing product specifications for the Carrier Optima Green Non-Inverter Top Discharge1.0HP</p>
            <div className='speci-acc'>
                {
                    metaData.map((x, index) => (
                        <div className='speci-section'>
                            <div className='acc-btn'>
                                <span onClick={() => handleVisibleClick(index)}>{x.category}</span>
                                <div className={isVisible.includes(index) ? 'arrow arrow-bottom' : 'arrow arrow-top'}></div>
                            </div>
                            <div className={isVisible.includes(index) ? 'not-visible' : 'visible'}>
                                {
                                    x.specification.map((val) => (
                                        <div className='acc-flex'>
                                            <p>{val.title}</p>
                                            <p>{val.desc}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Specifications;