import "./NavBar.css";
import { NavLink } from "react-router-dom";
import SearchBarTab from "./SearchBarTab";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartItem } from "../features/yourCart";


function NavBar() {
    const countitem = useSelector(state=>state.cart.cartitem.length);
    const navigate = useNavigate();
    const [searchOpen, setSearchOpen] = useState(false);
    const handleFocus = useCallback(() => {
        setSearchOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setSearchOpen(false);
    }, []);

    const handleSearchedItem = useCallback(() => {
        navigate("/searchitem")
    }, []);
    return (
        <div className="body">
            <nav className="navbar">
                <div className="logo">YourMart</div>
                <ul className="nav-links">
                    <li>
                        <SearchBarTab
                            searchOpen={searchOpen}
                            onFocus={handleFocus}
                            onClose={handleClose}
                            onSearchSelect={handleSearchedItem}
                        />
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            onClick={() => setSearchOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            onClick={() => setSearchOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addcart"
                            onClick={() => setSearchOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            🛒{countitem}
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {searchOpen && <div className="overlay" onClick={() => setSearchOpen(false)} />}
        </div>
    )
}
export default NavBar;