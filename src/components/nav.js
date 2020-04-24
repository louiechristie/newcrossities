import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="link-nav">
          <Link
            to="/"
            style={{
              color: `white`,
            }}
          >
            Home
          </Link>
        </li>
        <li className="link-nav">
          <Link
            to="/about/"
            style={{
              color: `white`,
            }}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
