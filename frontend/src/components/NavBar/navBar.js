import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../login";


const NavBar = () => {
    const [user, setUser] = React.useState(null);

    async function login(user = null) {
        setUser(user);
    }

    async function logout() {
        setUser(null)
    }

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/restaurants" className="navbar-brand">
                    Home
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/restaurants"} className="nav-link">
                            Restaurants
                        </Link>
                    </li>
                    <li className="nav-item" >
                        {user ? (
                            <a onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>
                                Hola {user.name}, salir
                            </a>
                        ) : (
                            <Link to={"/login"} className="nav-link">
                                Ingresar
                            </Link>
                        )}

                    </li>
                    <li className="nav-item">
                        <Link to={"/map"} className="nav-link">
                            Ver Mapa
                        </Link>
                    </li>
                </div>
            </nav>

        </div>
    );
}

export default NavBar;
