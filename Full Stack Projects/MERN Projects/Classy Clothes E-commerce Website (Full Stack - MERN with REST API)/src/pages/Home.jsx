import React from 'react'
import Hero from '../components/Hero'
import EventsBanner from '../components/EventsBanner'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <EventsBanner/>
      <LatestCollection/>
      <OurPolicy/>
      <NewsletterBox/>
     
    </div>
  )
}

export default Home
