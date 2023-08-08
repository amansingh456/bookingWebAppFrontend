import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa"
import { MdAttractions } from "react-icons/md"
import HeaderSearch from './HeaderSearch'
import { AuthContext } from '../../context/AuthContext'

const Header = ({type}) => {
    const {user} = useContext(AuthContext)
    const firstName = user?.otherDetails.userName.split(" ")
    return (
        <Headerr>
            <HeaderContainer type>
                <HeaderList>
                    <HeaderListItem $active>
                        <FaBed />
                        <span>Stays</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FaPlane />
                        <span>Flights</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FaCar />
                        <span>Car rentals</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <MdAttractions />
                        <span>Attractions</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FaTaxi />
                        <span>Airport taxis</span>
                    </HeaderListItem>
                </HeaderList>
               {type !=="list" && 
               <>
                    <HeaderTitle>A lifetime of discounts ? It's Genius.</HeaderTitle>
                    <HeaderDesc>Get rewarded for your travels - unlock instant savings of 10% or more with a free amanBooking account.</HeaderDesc>
                    {user ? <Span>Hello <span style={{fontWeight:"600", fontSize:"20px", color:"#febb02"}}>Mr. {firstName[0]},</span> where do you intend to go..</Span> : <HeaderButton>Sign in / Register</HeaderButton>}
                    <HeaderSearch />
                </>}
            </HeaderContainer>
        </Headerr>
    )
}

export default Header


const Headerr = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
`
const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 30px 0px;
`
const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 20px;
`
const HeaderListItem = styled.div`
   display: flex;
   gap: 10px;
   align-items: center;
   border: ${props => props.$active ? "1px solid white" : "none"};
   border-radius: ${props => props.$active ? "15px" : "none"};
   padding: ${props => props.$active ? "5px 10px" : "0"};
`

const HeaderTitle = styled.h1`
    
`
const HeaderDesc = styled.p`
    margin: 20px 0;
`
const HeaderButton = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 30px;
`
const Span = styled.button`
    background-color: #003580;
    color: white;
    font-weight: 400;
    font-size: 16px;
    border: none;
    padding: 10px;
    padding-left: 0px;
    cursor: pointer;
    margin-bottom: 30px;
`