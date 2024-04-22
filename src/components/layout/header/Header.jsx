import React, { useState } from 'react'

import classes from './Header.module.scss'

export const Header = ({ headerOpen }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header
      className={`${classes.main__header} ${
        headerOpen ? classes.main__header__active : ''
      }`}
    >
      <div
        className={`${classes.hamburger} ${
          navOpen ? classes.hamburger__active : ''
        }`}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}
