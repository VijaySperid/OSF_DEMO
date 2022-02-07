import React from 'react';
 

const Demooutput =(props)=>{
    console.log('Demo');
return (
    <p>{props.show ?'hello text ---':''}</p>
)
}

export default Demooutput;