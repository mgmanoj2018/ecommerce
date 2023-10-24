import React from 'react'
import './Hero.css'
import hand from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
function Hero() {
  return (
   <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hand-hend-icon'>
                    <p>NEW</p>
                    <img src={hand} alt='hand' />                   
                </div>
                <p>collection</p>
                <p>for everyone</p>
                <div className='hero-latest-btn'>
                    <div>Letest Collection</div>
                   <img src={arrow}   alt='arrow'/>
                </div>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt='hero_image' />
        </div>
   </div>
  )
}

export default Hero