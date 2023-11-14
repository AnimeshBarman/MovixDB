import React from 'react'
import { Carousel } from '../../../components'
import UseFetch from '../../../hooks/UseFetch'

function Similar({ mediaType, id }) {
    const { data, loading, error } = UseFetch(`/${mediaType}/${id}/similar`)

    const title = mediaType === 'tv' ? 'Similar TV Shows' : 'Similar Movies';
    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    )
}

export default Similar