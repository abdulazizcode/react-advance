import React, { useState, useEffect } from 'react';

//clean up function
//second argument

const UseEffectCleanUp = ()=>{
    const [size, setSize] = useState(window.innerWidth);
    
    const checkSize = () =>{
        setSize(window.innerWidth);
    }

    useEffect(() =>{
        console.log('useEffect')
        window.addEventListener('resize', checkSize);

        return () =>{
            console.log('cleanup');
            window.removeEventListener('resize', checkSize);
        };
    },[]);
    console.log('render')

    return(
        <>
        <h1>Window</h1>
        <h2>{size} PX</h2>
        </>
    )

}

export default UseEffectCleanUp;