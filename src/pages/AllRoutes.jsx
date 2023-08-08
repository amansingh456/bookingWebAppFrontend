import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import List from './list/List'
import SingleHotel from './hotel/SingleHotel'
import Login from './login/Login'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<SingleHotel/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes
