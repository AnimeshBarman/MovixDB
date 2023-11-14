import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UseFetch from '../../../hooks/UseFetch'
import { Img, ContentWrapper } from '../../../components'
import { useSelector } from 'react-redux'
import './style.scss'

function HeroBanner() {

  const [backGround, setBackGround] = useState('')
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const {url} = useSelector(state => state.home)

  const { data, loading } = UseFetch('/movie/upcoming')

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);

  }, [data])

  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }


  return (
    <div className="heroBanner">
        {!loading && <div className='backdrop-img'>
          <Img src={backGround} />
        </div>}
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className='title'>Welcome..</span>
            <span className='subTitle'>Millions of movies, TV shows and people to discover.
              Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder='Search for a movie or tv show..'
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={() => navigate(`/search/${query}`)}>Search</button>
            </div>
          </div>
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner