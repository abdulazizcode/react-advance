import React, {useReducer} from "react";

function reducer (state, action) {
	if(action.type === 'increment'){
		return {count:state.count+1}
	}else if(action.type === 'decrement'){
		return {count:state.count-1}
	}
}

const useReducerComponent = () => {
	const [state, dispatch] = useReducer(reducer, {count:0})

	function increment (){
		dispatch({type:'increment'})
	}

	function decrement () {
		dispatch({type:'decrement'})
	}
	return (
		<div>
			<button onClick={increment}>+</button>
			<span>{state.count}</span>
			<button onClick={decrement}>-</button>
		</div>
	)
}

export default useReducerComponent;