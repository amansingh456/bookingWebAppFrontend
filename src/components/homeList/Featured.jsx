import React, {  useState } from 'react'
import { styled } from 'styled-components'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const Featured = () => {
   const [destination, setDestination] = useState("where are you going ?")
   const [dates, setDates] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: 'selection'
      }
   ]);
   const [option, setOption] = useState({
      adult: 1,
      children: 0,
      room: 1
   })
   const navigate = useNavigate()
   const handleNavigate = () =>{
      navigate("/hotels",{state:{destination,dates,option}})
   }
   const { data, loading, error } = useFetch("/api/hotels/countByCity?cities=bhind,london,gwalior")
   return (
      <Featuredd>
         {loading ? "...Loading Please Wait !" :
            <>
               <FeaturedItem onClick={handleNavigate}>
                  <FeaturedImg src='/dublin.jpg' alt='' />
                  <FeaturedTitle>
                     <H1>Bhind</H1>
                     <H1>{data[0]} properties</H1>
                  </FeaturedTitle>
               </FeaturedItem>
               <FeaturedItem onClick={handleNavigate}>
                  <FeaturedImg src='/austin.jpg' alt='' />
                  <FeaturedTitle>
                     <H1>London</H1>
                     <H1>{data[1]} properties</H1>
                  </FeaturedTitle>
               </FeaturedItem>
               <FeaturedItem onClick={handleNavigate}>
                  <FeaturedImg src='/reno.jpg' alt='' />
                  <FeaturedTitle>
                     <H1>Reno</H1>
                     <H1>{data[2]} properties</H1>
                  </FeaturedTitle>
               </FeaturedItem>
            </>}
      </Featuredd>
   )
}

export default Featured

const Featuredd = styled.div`
   width: 100%;
   max-width: 1024px;
   display: flex;
   justify-content: space-between;
   gap: 20px;
   z-index: 1;
`
const FeaturedItem = styled.div`
   position: relative;
   color: white;
   border-radius: 10px;
   overflow: hidden;
   height: 250px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;`
const FeaturedImg = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   cursor: pointer;
`
const FeaturedTitle = styled.div`
   position: absolute;
   bottom: 10px;
   left: 20px;
`
const H1 = styled.h2`
   /* color: black; */
`