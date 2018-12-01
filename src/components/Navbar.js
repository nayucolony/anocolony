/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <div
            css={css`
              font-size: 2rem;
              font-weight: bold;
            `}
          >
            アノコロニー
          </div>
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
