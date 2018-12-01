import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'
const Header = ({ siteTitle }) => (
  <div className="logo-sec">
    <div className="wrapping">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        </Link>
		
<Navigation/>
		
    </div>
  </div>
)
export default Header
