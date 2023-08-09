import React, { useState } from 'react'
import { styled } from 'styled-components'
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const FeaturedProp = () => {
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



   const { data, loading, error } = useFetch("/api/hotels?featured=true")
   console.log('data: ', data);
   const images = [
      "hotel3.jpeg",
      "cabin2.jpg",
      "hotel1.jpg",
      "appartment2.jpeg"
   ]
   return (
      <FProp>
         {loading ? "...Laoding !" : <>
            {data && images?.map((img, i) => (
               <FPropItem key={i} onClick={handleNavigate}>
                  <FPropImg src={img} alt='' />
                  <FPropName>{data[i]?.name}</FPropName>
                  <FPropCity>{data[i]?.city}</FPropCity>
                  <FPropPrice>Starting from ${data[i]?.price}</FPropPrice>
                  <FPropRating>
                     <Button>8.9</Button>
                     <Span>Excellent</Span>
                  </FPropRating>
               </FPropItem>
            ))}
         </>}

      </FProp>
   )
}

export default FeaturedProp

const FProp = styled.div`
   width: 100%;
   max-width: 1024px;
   display: flex;
   justify-content: space-between;
   gap: 20px;
`
const FPropItem = styled.div`
    flex: 1;
   border-radius: 10px;
   overflow: hidden;
   cursor: pointer;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
const FPropImg = styled.img`
   width: 100%;
   height: 150px;
`
const FPropName = styled.h3`
   font-weight: bold;
   margin-left: 10px;
`
const FPropCity = styled.h4`
   font-weight: 300;
   margin-left: 10px;
`
const FPropPrice = styled.span`
   font-weight: 500;
   margin-left: 10px;
`
const FPropRating = styled.div`
   margin-bottom: 15px;
`

const Button = styled.button`
   background-color: #003580;
   color: #fff;
   padding: 3px;
   margin-right: 10px;
   margin-left: 10px;
   font-weight: bold;
   border: none;
   outline: none;
   border-radius: 5px;
`
const Span = styled.span`
   font-size: 14px;
`