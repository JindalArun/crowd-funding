import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div>
      <Header />
      <nav className="navLinks">
        <ul>
            <Link to="/">Login</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/raiseFunds"> Raise Funds</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/listCampaign">Campaign Dashboard</Link>
            
        </ul>
      </nav>
        <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
