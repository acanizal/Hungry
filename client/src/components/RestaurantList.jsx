import React, {useEffect, useContext } from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);

    //adds a slash to the url of the RestaurantFinder api to prevent writing the url over and over
    useEffect(() => {
        //useEffect does not like async, because the code wasn't returning anything, but async implies 
        //returning a promise, so create a async fxn and return inside the useEffect
      const fetchData = async () => {
        try {
          // the "/" adds the url to the base url located in RestaurantFinder api
          const response = await RestaurantFinder.get("/");
          setRestaurants(response.data.data.restaurants);
          
          //console.log(response);
        } catch(err) {

        }
      };
      fetchData();

        
        //this empty array prevents from looping the useEffect
    },[]);

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
            <tr className="big-primary">
                <th scope="col">Restaurant</th>
                <th scope="col">Location</th>
                <th scope="col">Price Range</th>
                <th scope="col">Ratings</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Mcdonalds</td>
                <td>New York</td>
                <td>$$</td>
                <td>Rating</td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>

            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantList;
