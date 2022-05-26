import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss';

export default function Sidebar() {
  return (
    <>
      <Link to='/'><h1>Test</h1></Link>
      <nav>
        <ul>
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul>
      </nav>
    </>
  )
}