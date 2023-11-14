import React, { useState } from 'react'
import { ContentWrapper, SwitchTab, Carousel } from '../../../components'
import UseFetch from '../../../hooks/UseFetch'
import '../style.scss'

function Trending() {

  const [endpoint, setEndpoint] = useState('day')

  const { data, loading } = UseFetch(`/trending/all/${endpoint}`)

  const onTabChange = (tab) => {
    setEndpoint(tab === 'Day' ? 'day' : 'week')
  }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTab data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending