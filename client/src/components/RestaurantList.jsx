import React, {useEffect} from 'react';
import RestaurantFinder from "../apis/RestaurantFinder"

const RestaurantList = () => {

    //adds a slash to the url of the RestaurantFinder api to prevent writing the url over and over
    useEffect(async() => {
        try {
          const response = await RestaurantFinder.get("/");
          console.log(response);
        } catch(err) {

        }
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
