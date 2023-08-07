import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import { styled } from 'styled-components'
// import useFetch from "../../hooks/useFetch"
// import SearchItem from './SearchItem'

const ListSearch = ({setMax, setMin, reFetch, setDestination, destination}) => {
   const location = useLocation()
   const [dates, setDates] = useState(location.state.dates)
   const [opendate, setOpenDate] = useState(false)
   const [option, setOption] = useState(location.state.option)
   


   const handleClick = () =>{
      reFetch()
   }
   
   return (
      <ListSearchh>
         <ListTitle>Search</ListTitle>
         <LsItem>
            <Label>Destination</Label>
            <Input type='text' placeholder={destination} onChange={(e)=>setDestination(e.target.value)} />
         </LsItem>
         <LsItem>
            <Label>Check-in Date</Label>
            <Span onClick={() => setOpenDate((prev) => !prev)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</Span>
            {opendate &&
               <DateRange onChange={item => setDates([item.selection])} ranges={dates} minDate={new Date()} />
            }
         </LsItem>
         <LsItem>
            <Label>Options</Label>
            <LsOptions>
               <LsOptionItem>
                  <LsOptionText >Min Price <small>per night</small></LsOptionText>
                  <LsOptionInput type="number" onChange={(e)=>setMin(e.target.value)} />
               </LsOptionItem>
               <LsOptionItem>
                  <LsOptionText>Max Price <small>per night</small></LsOptionText>
                  <LsOptionInput type="number" onChange={(e)=>setMax(e.target.value)}/>
               </LsOptionItem>
               <LsOptionItem>
                  <LsOptionText>Adult</LsOptionText>
                  <LsOptionInput min={1} type="number" placeholder={option.adult} />
               </LsOptionItem>
               <LsOptionItem>
                  <LsOptionText>Children</LsOptionText>
                  <LsOptionInput min={0} type="number" placeholder={option.children} />
               </LsOptionItem>
               <LsOptionItem>
                  <LsOptionText>Room</LsOptionText>
                  <LsOptionInput min={1} type="number" placeholder={option.room} />
               </LsOptionItem>
            </LsOptions>
            <Button onClick={handleClick}>Search</Button>
         </LsItem>
      </ListSearchh>
   )
}

export default ListSearch


const ListSearchh = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`
const ListTitle = styled.h1`
   font-size: 20px;
   color: #555;
   margin-bottom: 10px;
`

const LsItem = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;
   margin-bottom: 10px;
`
const Label = styled.label`
   font-size: 12px;
`
const Input = styled.input`
   height: 30px;
   border: none;
   padding: 5px;
`
const Span = styled.span`
   height: 30px;
   padding: 5px;
   background-color: #fff;
   display: flex;
   align-items: center;
   cursor: pointer;
   font-size: 17px;
`
const LsOptions = styled.div`
   padding: 10px;
`
const LsOptionItem = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 5px;
   color: #555;
   font-size: 12px;
`

const LsOptionText = styled.span`
   
`

const LsOptionInput = styled.input`
   width: 50px;
`
const Button = styled.button`
   padding: 10px;
   background-color: #0071c2;
   color: #fff;
   border: none;
   font-weight: 500;
   cursor: pointer;
   width: 100%;
`

