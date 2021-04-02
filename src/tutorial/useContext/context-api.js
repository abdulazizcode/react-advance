import React, {useState, useContext} from "react";
import {data} from "../../data";


const PersonContext = React.createContext();

const ContextApi = () => {
	const [people, setPeople] = useState(data);

	const removePerson = (id) => {
      setPeople((people) => {
          return people.filter((person) => person.id !== id);
       });
    };

	return(
		<PersonContext.Provider value={{people, removePerson}}>
			<h3>ContextApi/ useContext</h3>
			<List/>
		</PersonContext.Provider>
	);
}


const List = () => {
	const mainData = useContext(PersonContext);
    console.log(mainData);
	return (
		<div>
			{mainData.people.map((person) =>{
				return <SingleList key={person.id} {...person}/>
			})}
		</div>
	)
}

const SingleList = ({id,name}) => {
	const {removePerson} = useContext(PersonContext);
	return(
		<div>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	)
}


export default ContextApi;