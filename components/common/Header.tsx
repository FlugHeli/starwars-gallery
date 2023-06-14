import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Image
          src="/StarWarsTransparent.png"
          alt="Star Wars Logo"
          width={100}
          height={50}
        />
      </div>
      <div className="header__navbar">
        <ul>
          <li><a href="">Sith</a></li>
          <li><a href="">Jedi</a></li>
          <li><a href="">Locations</a></li>
          <li><a href="">Weapons</a></li>
          <li><a href="">Vehicles</a></li>
        </ul>
      </div>
    </div>
  )
}