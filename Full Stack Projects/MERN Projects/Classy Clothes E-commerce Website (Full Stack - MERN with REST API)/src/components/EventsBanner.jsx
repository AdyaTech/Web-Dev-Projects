import React from 'react'

import event1 from '../oldimages/event1.png' 
import event2 from '../oldimages/event2.png' 
import event3 from '../oldimages/event3.png' 

const EventsBanner = () => {
  return (
    <section className='event-container'>
      <div className='subtitle'>
        <span>LATEST PROMOTIONS</span>
        <h2>Our Promotions Events</h2>
      </div>

      <div className='event-banner'>
        <div className='event-banner-left'>
          <div className='event-card  hover:scale-110 transition ease-in-out'>
            <div className='content'>
              <h3>GET UP TO <span>60%</span></h3>
              <p>For the summer season</p>
            </div>
            <img src={event1} alt='event' />
          </div>

          <div className='event-card hover:scale-110 transition ease-in-out'>
            <h3>GET 30% Off</h3>
            <p>USE PROMO CODE</p>
            <button>WEEKENDSALE</button>
          </div>
        </div>

        <div className='event-banner-right'>
          <div className='event-banner-right-1 hover:scale-110 transition ease-in-out'>
            <div className='details'>
              <p>Flex Sweatshirt</p>
              <div className='price'>
                <span>$100.00</span>
                <span>$75.00</span>
              </div>
            </div>
            <img src={event2} alt='event' />
          </div>

          <div className='event-banner-right-2 hover:scale-110 transition ease-in-out'>
            <div className='details'>
              <p>Flex Push Bomber</p>
              <div className='price'>
                <span>$225.00</span>
                <span>$190.00</span>
              </div>
            </div>
            <img src={event3} alt='event' />
          </div>
        </div>
      </div>
      
      <div className='subtitle-two'>
        <span>LATEST COLLECTIONS</span>
        <h2>Check What We Have</h2>
      </div>
      
    </section>
  )
}


export default EventsBanner
