import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/spectacles.svg"
function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false)
  const [links] = useState([
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/services",
      text: "Services",
    },
    {
      id: 3,
      path: "/contact",
      text: "Contact",
    },
  ])

  const handleNavBar = () => {
    setNavBarOpen(!navBarOpen)
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Spectacle Logo" style={{ height: "30px" }} />
          {/* Icon made by Freepik from www.flaticon.com */}
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleNavBar}>
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={
            navBarOpen
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
        >
          <ul className="navbar-nav mx-auto">
            {links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
