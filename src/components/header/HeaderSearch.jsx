import React, { useContext, useState } from 'react'
import { FaBed, FaCalendarDay, FaPersonBooth } from 'react-icons/fa'
import { styled } from 'styled-components'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const HeaderSearch = () => {
   const navigate = useNavigate()
   const [destination, setDestination] = useState("where are you going ?")
   const [openState, setOpenState] = useState(false)
   const [dates, setDates] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: 'selection'
      }
   ]);
   const [openPersonOption, setOpenPersonOption] = useState(false)
   const [option, setOption] = useState({
      adult: 1,
      children: 0,
      room: 1
   })


   const handleOption = (name, operation) =>{
      setOption((prev)=>{return{
         ...prev, 
         [name] : operation === "i" ? option[name] +1 : option[name] -1
      }})
   }
   
   const {dispatch} = useContext(SearchContext)

   const handleSearch = () =>{
      dispatch({type:"NEW SEARCH", payload:{destination, dates, option}})
      navigate("/hotels",{state:{destination,dates,option}})
   }
   return (
      <HeaderSearchh>
         <HeaderSearchItem>
            <FaBed color='grey' />
            <Input type="text" placeholder='Where are you going ?' onChange={(e)=>setDestination(e.target.value)} />
         </HeaderSearchItem>
         <HeaderSearchItem>
            <FaCalendarDay color='grey' />
            <Text onClick={() => setOpenState((prev) => !prev)} type="text">{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</Text>
            {openState && <DateRange
               editableDateInputs={true}
               onChange={item => setDates([item.selection])}
               moveRangeOnFirstSelection={false}
               ranges={dates}
               className='dates'
               minDate={new Date()}
            />}
         </HeaderSearchItem>
         <HeaderSearchItem>
            <FaPersonBooth color='grey' />
            <Text onClick={() => setOpenPersonOption((prev) => !prev)} type="text">{`${option.adult} adult - ${option.children} children - ${option.room} room `}</Text>
            {openPersonOption && <PersonOption>
               <PersonOptionItem>
                  <PersonOptionText>Adult</PersonOptionText>
                  <PersonOptionCounter>
                     <PersonOptionCounterButton disabled={option.adult<=1} onClick={()=>handleOption("adult","d")}>-</PersonOptionCounterButton>
                     <PersonOptionCounterNumber>{option.adult}</PersonOptionCounterNumber>
                     <PersonOptionCounterButton onClick={()=>handleOption("adult","i")}>+</PersonOptionCounterButton>
                  </PersonOptionCounter>
               </PersonOptionItem>
               <PersonOptionItem>
                  <PersonOptionText>Children</PersonOptionText>
                  <PersonOptionCounter>
                     <PersonOptionCounterButton disabled={option.children<=0} onClick={()=>handleOption("children","d")}>-</PersonOptionCounterButton>
                     <PersonOptionCounterNumber>{option.children}</PersonOptionCounterNumber>
                     <PersonOptionCounterButton onClick={()=>handleOption("children","i")}>+</PersonOptionCounterButton>
                  </PersonOptionCounter>
               </PersonOptionItem>
               <PersonOptionItem>
                  <PersonOptionText>Room</PersonOptionText>
                  <PersonOptionCounter>
                     <PersonOptionCounterButton disabled={option.room<=1} onClick={()=>handleOption("room","d")}>-</PersonOptionCounterButton>
                     <PersonOptionCounterNumber>{option.room}</PersonOptionCounterNumber>
                     <PersonOptionCounterButton onClick={()=>handleOption("room","i")}>+</PersonOptionCounterButton>
                  </PersonOptionCounter>
               </PersonOptionItem>
            </PersonOption>}
         </HeaderSearchItem>
         <HeaderSearchItem>
            <HeaderButton onClick={handleSearch}>Search</HeaderButton>
         </HeaderSearchItem>
      </HeaderSearchh>
   )
}

export default HeaderSearch

const HeaderSearchh = styled.div`
   height: 30px;
   background-color: #fff;
   border: 3px solid #febb02;
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 10px 0px;
   border-radius: 5px;
   position: absolute;
   bottom: -25px;
   width: 100%;
   max-width: 1024px;
`
const HeaderSearchItem = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   /* position: absolute; */
`
const HeaderButton = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
    /* margin-bottom: 30px; */
`

const Input = styled.input`
   outline: none;
   border: none;
   cursor: pointer;
`

const Text = styled.span`
   color: lightgray;
   cursor: pointer;
   font-size: 12px;
`

const PersonOption = styled.div`
   position: absolute;
   top: 53px;
   z-index: 2;
   /* right:15%; */
   background-color: #fff;
   color: gray;
   border-radius: 5px;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const PersonOptionItem = styled.div`
   width: 200px;
   display: flex;
   justify-content: space-between;
   margin: 10px;
`
const PersonOptionText = styled.span`
   
`
const PersonOptionCounter = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   font-size: 12px;
   color: black;
`
const PersonOptionCounterNumber = styled.span`
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const PersonOptionCounterButton = styled.button`
width: 30px;
height: 30px;
border: 1px solid #0071c2;
color: #0071c2;
background-color: #fff;
cursor: ${props=>props.disabled ? "not-allowed":"pointer"};
`