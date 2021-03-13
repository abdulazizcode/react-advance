import React, { useState } from 'react';

const ShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);


    return(
        <div>
            <h1>{text || 'Abdusamadzoda Abdulaziz'}</h1>
            <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>

            {isError && <h1>Error...</h1>}
            {isError ? (
                <p>there is an error...</p>
            ): (
                <div>
                    <h2>there is no error</h2>
                </div>
            )}
        </div>
    );
};
export default ShortCircuit;