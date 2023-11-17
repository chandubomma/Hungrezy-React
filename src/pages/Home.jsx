import React from 'react'
import RightSwiper from '../components/Home/RightSwiper'
import AnimatedText from '../components/Home/AnimatedText'

const Home = () => {
    const array = ['Are you feeling hungry?','Hungrezy is here!']
  return (
    <div>
      {/* <AnimatedText textArray={array}/> */}
      <div className='w-72 h-2/3 border-2 shadow-md shadow-gray-700'>
        <RightSwiper/>
      </div>
    </div>
  )
}

export default Home
