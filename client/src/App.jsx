import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantContextProvider } from './context/RestaurantsContext';

const App = () => {
    return (
    <RestaurantContextProvider>
    <div className="container">
        <Router>
            <Switch>
            <Route path='/' component={Home} />
            <Route path='/restaurants/:id/update'  component={UpdatePage} />
            <Route path='/restaurants/:id' component={RestaurantDetailPage} />
            </Switch>
        </Router>
    </div>

    </RestaurantContextProvider>
    );
};

export default App;