// import { Link } from "react-router-dom";
import {Link} from "react-router"
import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">

            
            <div className="navbar-start">
                <Link to="/" className="text-2xl font-extrabold bg-linear-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    Movie Explorer
                </Link>
            </div>


<div className="hidden md:flex navbar-center">
            <ul className="menu menu-horizontal px-1 gap-2">
    <li>
        <NavLink
            to="/"
            end
            className={({ isActive }) =>
                isActive ? "active font-bold bg-linear-to-r from-orange-400 to-pink-500 text-white" : ""
            }
        >
            Home
        </NavLink>
    </li>

    <li>
        <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive ? "active font-bold bg-linear-to-r from-orange-400 to-pink-500 text-white" : ""
            }
        >
            About
        </NavLink>
    </li>

    <li>
        <NavLink
            to="/contact"
            className={({ isActive }) =>
                isActive ? "active font-bold bg-linear-to-r from-orange-400 to-pink-500 text-white" : ""
            }
        >
            Contact
        </NavLink>
    </li>
</ul>
</div>
            
            <div className="navbar-end">
                <div className="ml-3">
                    <Link to="/movies"
                     className="btn btn-primary font-extrabold bg-linear-to-l from-orange-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                        Movie Listing
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Header;