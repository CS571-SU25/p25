import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 2rem",
                backgroundColor: "#222",
                color: "white",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000
            }}
        >
            {/* Left: Logo and Site Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wisconsin_Badgers_logo.svg/2171px-Wisconsin_Badgers_logo.svg.png"
                    alt="Wisconsin Badgers Logo"
                    style={{ width: "40px", height: "auto" }}
                />
                <span style={{ color: 'white', fontWeight: 'bold' }}>Badgers Basketball</span>
            </div>

            {/* Center: Navigation Links */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flex: 1 }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                <Link to="/player-info" style={{ color: 'white', textDecoration: 'none' }}>The Team</Link>
                <Link to="/schedule" style={{ color: 'white', textDecoration: 'none' }}>Schedule</Link>
            </div>

            {/* Right: Cart Link */}
            <div>
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                    alt="Shopping Cart"
                    style={{ width: "40px", height: "auto", filter: "invert(1)", marginRight: "15px" }}
                />
                <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
            </div>
        </nav>
    );
}