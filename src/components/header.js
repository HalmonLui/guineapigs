import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <div className="navbar-content">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <h1>{siteTitle}</h1>
      </Link>
      <Link
        to="/page-2/"
        style={{
          textDecoration: "none",
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <h2>Food</h2>
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <h2>Care</h2>
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <h2>Illness</h2>
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <h2>Shop</h2>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
