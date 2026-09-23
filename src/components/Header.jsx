import { Link, NavLink } from "react-router";

const Header = () => {

    // Reusable NavLink 
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "font-bold bg-linear-to-r from-orange-400 to-pink-500 text-white"
            : "";

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">

            {/* LEFT SIDE: Logo + Mobile Menu */}
            <div className="navbar-start">

                {/* Mobile Dropdown */}
                <div className="dropdown lg:hidden">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost"
                    >
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink to="/" end className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={navLinkClass}>
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" className={navLinkClass}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>


                {/* Logo */}
                <Link
                    to="/"
                    className="ml-2 text-2xl font-extrabold bg-linear-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
                >
                    Movie Explorer
                </Link>

            </div>


            {/* CENTER: Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1">

                    <li>
                        <NavLink to="/" end className={navLinkClass}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={navLinkClass}>
                            Contact
                        </NavLink>
                    </li>

                </ul>

            </div>


            {/* RIGHT SIDE */}
            <div className="navbar-end">

                <Link
                    to="/movies"
                    className="btn font-extrabold bg-linear-to-l from-orange-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                >
                    Movie Listing
                </Link>

            </div>

        </div>
    );
};

export default Header;