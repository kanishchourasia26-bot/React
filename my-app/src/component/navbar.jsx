import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          VReact
        </Link>

        <button
          className="navbar-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`navbar-links${menuOpen ? ' navbar-links-open' : ''}`}
          id="primary-navigation"
        >
          <NavLink
            className={({ isActive }) => `navbar-link${isActive ? ' navbar-link-active' : ''}`}
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `navbar-link${isActive ? ' navbar-link-active' : ''}`}
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => `navbar-link${isActive ? ' navbar-link-active' : ''}`}
            to="/dashboard"
            onClick={closeMenu}
          >
            Dashboard
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar