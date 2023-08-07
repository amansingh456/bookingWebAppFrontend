import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import List from './list/List'
import SingleHotel from './hotel/SingleHotel'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<SingleHotel/>}/>
    </Routes>
  )
}

export default AllRoutes
