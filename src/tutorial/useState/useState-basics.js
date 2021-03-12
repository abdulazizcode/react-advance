import React, {useState} from "react";


const UseStateBasics = () => {
	const [text, setText] = useState('Tajikistan');

	const randomTitles = () =>{
		const names = ['Tajikistan', 'Malaysia', 'Dubai', 'China', 'USA'];
		return names[Math.floor(Math.random() * names.length)];
	}

	const handleClick = () =>{
		setText(randomTitles);
	}

	return (
		<>
		   <h1>{text}</h1>
		   <button type="button" className="btn" onClick={handleClick}>Change Title</button>
		</>
	);
};

export default UseStateBasics;
