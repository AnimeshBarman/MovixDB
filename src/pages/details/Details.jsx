import React from 'react'
import UseFetch from '../../hooks/UseFetch'

import './style.scss'
import { useParams } from 'react-router-dom'
import {VideoSec, Cast, Similar, Recommend} from '../index'
import DetailsBanner from './detailsBanner/DetailsBanner'

function Details() {
  const {mediaType, id} = useParams();
  const {data, loading} = UseFetch(`/${mediaType}/${id}/videos`)
  const {data: credits, loading: setCreditsLoading} = UseFetch(`/${mediaType}/${id}/credits`)


  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={setCreditsLoading}/>
      <VideoSec data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommend mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details