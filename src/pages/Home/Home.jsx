import React from 'react'
import './home.css'
import iphone from '../../assets/iphone.png'
import narzo from '../../assets/narzo.png'
import xiaomi from '../../assets/xiaomi.png'
import watch from '../../assets/watch-img.png'

const Home = () => {
  return (
    <main>
   <div className="landing-page">
   <div id='offer-banner'>
      <img id="watch" src={watch} alt="watch" />
    </div>
      <div className="mobile-section">
        <img src={iphone} alt="mobile-img" />
        <img src={narzo} alt="mobile-img" />
        <img src={xiaomi} alt="mobile-img" />
      </div>
   </div>
    </main>
  )
}

export default Home
