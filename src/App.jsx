import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {fetchDataFromApi} from './utils/api'
import { getApiConfig, getGenres } from './store/homeSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Header, Footer } from './components'
import {Home, Details, SearchResult, Explore, PageNotFound} from './pages/index'

function App() {

  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url)

  useEffect(() => {
    fetchApiConfig()
    genresCall()
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
    .then((res) => {

      const imageurl = {
        backdrop: res.images.secure_base_url + 'original',
        poster: res.images.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original',
      }

      dispatch(getApiConfig(imageurl))
    })
  }

  const genresCall = async () => {
    let promises = []
    let endPoints = ['tv', 'movie']
    let allGenres = {}

    endPoints.forEach((option) => {
      promises.push(fetchDataFromApi(`/genre/${option}/list`))

    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })
    dispatch(getGenres(allGenres))
  }

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:mediaType/:id' element={<Details />}/>
        <Route path='/search/:query' element={<SearchResult />}/>
        <Route path='/explore/:mediaType' element={<Explore />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )  
}

export default App
