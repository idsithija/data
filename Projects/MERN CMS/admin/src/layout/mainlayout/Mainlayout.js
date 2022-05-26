import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Sidebar from '../../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom'
import './mainlayout.scss';

export default function Mainlayout() {
  return (
    <>
        <header>
            <Navigation />
        </header>
        <aside>
            <Sidebar />
        </aside>
        <main>
            <Outlet />
        </main>
    </>
  )
}
