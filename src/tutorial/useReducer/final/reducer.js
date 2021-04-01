export const reducer = (state, action) =>{
	if (action.type === 'ADD_ITEM') {
		const newPeople = [...state.people, action.payload]
		return {
			...state,
		    people:newPeople, 
			isModelOpen:true, 
			modalContent:"Item added"
		};
}

	if(action.type === 'NO_VALUE'){
		return {
			...state,
			isModelOpen:true,
			modalContent: 'Please enter value'
		}
	}

	if(action.type === 'CLOSE_MODAL'){
	    return {
			...state,
			isModelOpen:false
		}
	}

	if(action.type === 'REMOVE_ITEM'){
		const newPeople = state.people.filter((person) =>
			person.id !== action.payload
		);
	    return {
			...state,
			people:newPeople,
			isModelOpen:true,
			modalContent: "Item deleted"

		}
	}
}