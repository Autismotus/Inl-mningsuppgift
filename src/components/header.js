import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="navitem">
                        <Link className="links" to="/">Home</Link>

                    </li>
                    <li className="navitem">
                        <Link className="links" to="/products">Products</Link>

                    </li>
                    <li className="navitem">
                        <Link className="links" to="/cart">Cart</Link>

                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;