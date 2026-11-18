
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "../../ui/Container";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Menu", path: "/menu" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Container className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-icon">S.</span>
          <span>Simple Café</span>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="navbar__mobile-cta"
            onClick={closeMenu}
          >
            Visit Us <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link to="/contact" className="navbar__cta">
          Visit Us <ArrowUpRight size={16} />
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </Container>
    </header>
  );
}

export default Navbar;
