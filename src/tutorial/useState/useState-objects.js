import React, { useState } from 'react';

const UseStateObject = () =>{
    const [person, setPerson] = useState({
        name: 'Abdulaziz',
        age: 21,
        message: 'Lets learn React Js!',
     });

     const changeMessage = () => {
         setPerson ({...person, message: 'I know JS'});
     };
    return(
        <>
          <h3>{person.name}</h3>
          <h3>{person.age}</h3>
          <h4>{person.message}</h4>
          <button className="btn" onClick={changeMessage}>Change message</button>
        </>
    );
};

export default UseStateObject;