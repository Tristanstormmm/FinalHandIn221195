import React from "react";
import { NavLink } from 'react-router-dom';
import Image from '../logo.png';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar() {

    return (
        <nav>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-11">
                    <div className="nav-left">
                        <div className="logo align-items-center" style={{ display: 'inline-block' }}>
                            <img src={Image} />
                        </div>
                        <ul className="nav-links">
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                            <NavLink to="/compare" activeClassName="active">Compare</NavLink>
                            <NavLink to="/timeline" activeClassName="active">Timeline</NavLink>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;

