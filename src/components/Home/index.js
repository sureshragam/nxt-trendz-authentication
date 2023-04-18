// Write your JS code here

import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-content">
      <div className="home-col-1">
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air art in the current word most people
          goes around it for some rich looks and for higher positions day by day
          fashion industry is grow rapidly looking forward to it{' '}
        </p>
        <button className="home-col-button" type="button">
          Shop Now
        </button>
      </div>
      <div className="home-col-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
