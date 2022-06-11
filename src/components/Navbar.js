//styles
import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom'
// components and hooks
import Searchbar from './Searchbar'
import useTheme from '../hooks/useTheme'

export default function NavBar() {
  const { color } = useTheme()
  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  )
}
