// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>
    <ul>
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/" className="link">
          Products
        </Link>
      </li>
      <li>
        <Link to="/" className="link">
          Cart
        </Link>
      </li>
      <li>
        <button type="button">Logout</button>
      </li>
    </ul>
  </nav>
)

export default Header
