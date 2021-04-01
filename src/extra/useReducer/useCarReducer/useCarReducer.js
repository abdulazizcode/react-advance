import React, {useRef, useReducer} from "react";

const initialState = {
  additionalPrice: 0,
  car: {
    image: "data:image/jpeg;base64,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",
    name: "2019 Ford Mustang",
    price: 100,
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 150 },
    { id: 2, name: "Racing detail package", price: 100 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 200 }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.item.price,
        car: { ...state.car, features: state.car.features.filter((x) => x.id !== action.item.id)},
        store: [...state.store, action.item]
      };
    case "BUY_ITEM":
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.item.price,
        car: { ...state.car, features: [...state.car.features, action.item] },
        store: state.store.filter((x) => x.id !== action.item.id)
      }
    default:
      return state;
  }
}

const Car = () => {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const removeFeature = (item) => {
    dispatch({ type: 'REMOVE_ITEM', item });
  }
  
  const buyItem = (item) => {
    dispatch({ type: 'BUY_ITEM', item })
  }
  
  return (
    <div className="boxes">
      <div className="box">
        <figure className="image is-128x128">
          <img src={state.car.image} />
        </figure>
        <h2>{state.car.name}</h2>
        <p>Amount: ${state.car.price}</p>
        <div className="content">
          <h6>Added features:</h6>
          {state.car.features.length ? 
            (
              <ol type="1">
                {state.car.features.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => removeFeature(item)}
                      className="button">X
                    </button>
                    {item.name}
                  </li>
                ))}
              </ol>
            ) : <p>You can purchase items from the store.</p>
          }
        </div>
      </div>
      <div className="box">
        <div className="content">
          <h2>Additional Features</h2>
          {state.store.length ? 
            (
            <ol type="1">
              {state.store.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => buyItem(item)}
                    className="button">Add</button>
                  {item.name} (+{item.price})
                </li>
              ))}
            </ol>
            ) : <h3 style={{'color':'red'}}>Nice looking car!</h3>
          }
        </div>

        <div className="content">
        <h4>
          Total Amount: ${state.car.price + state.additionalPrice}
        </h4>
      </div>
      </div>
    </div>
  );
}


export default Car;