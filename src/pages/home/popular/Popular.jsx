import React, { useState } from 'react'
import { ContentWrapper, SwitchTab, Carousel } from '../../../components'
import UseFetch from '../../../hooks/UseFetch'
import '../style.scss'

function Popular() {

    const [endpoint, setEndpoint] = useState('movie')

    const { data, loading } = UseFetch(`/${endpoint}/popular`)

    const onTabChange = (tab) => {
        setEndpoint(tab === 'Movies' ? 'movie' : 'tv')
    }

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>What's Popular</span>
                <SwitchTab data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    )
}

export default Popular