import React from 'react'
import HeroBanner from '../components/home/HeroBanner'
import Services from '../components/home/Services'
import WantToKnowMore from '../components/home/WantToKnowMore'

const Home = () => {
  return (
    <div>
        <HeroBanner />
      <div className='mx-10'>
        <Services />
    </div>
        <WantToKnowMore />
    </div>
  )
}

export default Home