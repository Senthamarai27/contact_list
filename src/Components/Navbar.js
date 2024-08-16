import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-secondary dark py-2 sticky-top'>
        <div className='container-fluid navbar-dark'>
            <Link to='/' className='navbar-brand ml-5'>Contact List</Link>
        </div>
      
    </nav>
  )
}

export default Navbar
