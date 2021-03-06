import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const NavBar = () => {
    const [user, setUser] = React.useState(null);

    async function logout() {
        setUser(null)
    }

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/restaurants" className="navbar-brand">
                    Home Restaurants
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item" >
                        {user ? (
                            <a onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>

                            </a>
                        ) : (
                            <Link to={"/login"} className="nav-link">
                                Ingresar
                            </Link>
                        )}
                    </li>
                </div>
            </nav>

        </div>
    );
}

export default NavBar;
