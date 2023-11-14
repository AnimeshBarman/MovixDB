import React from 'react'
import './style.scss'
import {HeroBanner, Trending, Popular, TopRated} from '../index'


function Home() {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home