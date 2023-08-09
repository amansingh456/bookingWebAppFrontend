import { styled } from "styled-components"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import ListSearch from "../../components/list/ListSearch"
import SearchItem from "../../components/list/SearchItem"
import { useLocation } from "react-router-dom"
import {  useState } from "react"
import useFetch from "../../hooks/useFetch"

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [min,setMin] = useState(undefined)
   const [max,setMax] = useState(undefined)

  const basicUrl = `/api/hotels`
  const varietyUrl = `/api/hotels?city=${destination}&min=${min || 10}&max=${max || 400000}`
  const url = destination==="where are you going ?" ?basicUrl:varietyUrl

   const {data, loading,  reFetch} = useFetch(url)
 
  return (
    <div>  
      <Navbar/>
      <Header type="list"/>
      <ListCont>
        <ListWrapper>
          <ListSearch max={max} setMax={setMax} min={min} setMin={setMin} reFetch={reFetch} setDestination={setDestination} destination={destination}/>
          <ListResult>
            {loading ? "...Loading !" : <>
            {data?.map((item,i)=>(
                <SearchItem key={i} item={item}/>
            ))}
            </>}
          </ListResult>
        </ListWrapper>
      </ListCont>
    </div>
  )
}

export default List

const ListCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`
const ListResult = styled.div`
  flex: 3;
`

