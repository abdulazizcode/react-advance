
import React, { useEffect, useRef } from 'react';

//DOES NOT trigger re-render
//target DOM nodes/element

const UseRefBasics = () =>{
	const refContainer = useRef(null);


	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(refContainer.current.value);
		console.log(refContainer);//will give you and object wich is current
	};

	useEffect(() =>{
		console.log(refContainer.current);
		refContainer.current.focus();
	})


	return(
		<>
			<form className="form" onSubmit={handleSubmit}>
				<div>
					<input type='text' ref={refContainer} />
				</div>
				<button type="submit">submit</button>
			</form>
		</>
	);
};

export default UseRefBasics;