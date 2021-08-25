import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";
import MapView from "./Map/mapView";
import NavBar from "./components/NavBar/navBar";


function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (

    <div>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route path="/restaurants/:id/review" render={(props) => (
            <AddReview {...props} user={user} />
          )}
          />
          <Route path="/restaurants/:id" render={(props) => (
            <Restaurant {...props} user={user} />
          )}
          />
          <Route path="/login" render={(props) => (
            <Login {...props} login={login} />
          )}
          />
          <Route exact path="/map" component={MapView} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
