import { Link } from 'react-router-dom';

export default function Header() {
    return <nav 
        style={{ 
            display: "flex", 
            justifyContent: 'center', 
            gap: '2rem', padding: "1rem", 
            backgroundColor: "#222", 
            color: "white", 
            position: "fixed", 
            top: 0, 
            left: 0,
            right: 0,
            zIndex: 1000
        }}
    >
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/player-info" style={{ color: 'white', textDecoration: 'none' }}>Player Info</Link>
        <Link to="/schedule" style={{ color: 'white', textDecoration: 'none' }}>Schedule</Link>
    </nav>
}