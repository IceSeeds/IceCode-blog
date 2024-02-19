import './header.scss'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header'>
        <p className='logo'><img src="./logo.png" alt="logo" /></p>
        <ul className='nav'>
            <li><a href="">NEWS</a></li>
            <li><a href="">NOTE</a></li>
            <li><a href="">STORE</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
    </div>
  )
}

export default Header
