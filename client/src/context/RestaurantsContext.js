import React, {useState, createContext} from "react";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([])

    const addRestaurants = (restaurant) => {
        //Adds current restaurants to new array
        setRestaurants([...restaurants, restaurant]);
    }

    return (
        <RestaurantsContext.Provider value={{restaurants, setRestaurants, addRestaurants}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}