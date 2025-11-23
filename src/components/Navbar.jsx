
import "./styles/Navbar.css";

export default function Navbar() {
    return (
        <header className="header">
            <a href="/" className="logo">
                Nizar4Code
            </a>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </nav>
        </header>
    );
}