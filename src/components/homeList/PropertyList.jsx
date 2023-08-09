import React, { useState } from 'react'
import { styled } from 'styled-components'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const PropertyList = () => {
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


   const { data, loading, error } = useFetch("/api/hotels/countByType")
   console.log('data: ', data);
   const images = [
      "hotel.jpg",
      "appartment.jpg",
      "resorts.jpg",
      "villa.jpg",
      "cabin.jpg"
   ]
   return (  
      <Plist>
         {loading ? "...Loading Please Wait !" :
            <>
               {data && images?.map((img,i) => (
                  <PlistItem key={i} onClick={handleNavigate}>
                     <PlistItemImg src={img} alt="" />
                     <PlistTitles>
                        <H1>{data[i]?.type}</H1>
                        <H2>{data[i]?.count} {data[i]?.type}</H2>
                     </PlistTitles>
                  </PlistItem>
               ))}
            </>
         }
      </Plist>
   )
}

export default PropertyList

const Plist = styled.div`
   width: 100%;
   max-width: 1024px;
   display: flex;
   justify-content: space-between;
   gap: 20px;
`
const PlistItem = styled.div`
   flex: 1;
   border-radius: 10px;
   overflow: hidden;
   cursor: pointer;
   height: 190px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
const PlistItemImg = styled.img`
   width: 100%;
   object-fit: cover;
`
const PlistTitles = styled.div`
   
`
const H1 = styled.h1`
   font-size: 18px;
   margin-left: 5px;
   text-transform: capitalize;
`
const H2 = styled.h2`
   font-size: 14px;
   font-weight: 300;
   margin-left: 5px;
`