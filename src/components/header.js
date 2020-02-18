import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, description }) => (
  <header>
    <p className="siteTitle">
      <Link to="/">{title}</Link>
    </p>

    <p className="subtitle">{description}</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
