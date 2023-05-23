import React from 'react'

export const Header = () => {
  return (
    <div className="header">
      <div className=" line line--short"></div>
      <div className="line"></div>
      <div className="header__main">
        <div className="header__font">Roxy&apos;s</div>
        <div className="header__logo">
          <img
            src="logo_primary_white.svg"
            alt="Logo"
            className="header__logo"
          />
        </div>
        <div className="header__font">Burger</div>
      </div>
      <div className="line"></div>
    </div>
  )
}
