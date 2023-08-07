import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const SearchItem = ({item}) => {
  return (
    <SearchItemm>
      <SearchItemImg src='/appartment3.jpg' alt=''/>
      <SearchItemDesc>
         <SearchItemTitle>{item?.name}</SearchItemTitle>
         <SearchItemDistance>{item?.distance}m from center</SearchItemDistance>
         <SearchItemTaxiOp>Free airport taxi</SearchItemTaxiOp>
         <SearchItemSubtitle>Studio Apartment with Air conditioning</SearchItemSubtitle>
         <SearchItemFeatures>{item?.desc}</SearchItemFeatures>
         <SearchItemCancelOp>Free Cancellation</SearchItemCancelOp>
         <SearchItemCancelOpTitle>You can cancel later, so lock in this great price today!</SearchItemCancelOpTitle>
      </SearchItemDesc>
      <SearchItemDetails>
         <SearchItemRating>
            <Span>Excellent</Span>
            <Button>8.9</Button>
         </SearchItemRating>
         <SearchDetailsText>
            <SearchDetailsPrice>${item?.price}</SearchDetailsPrice>
            <SearchDetailsTaxOp>Includes taxes and fees</SearchDetailsTaxOp>
            <Link to={`/hotels/${item._id}`}>
               <SearchDetailsCheckButton>See Availabilty</SearchDetailsCheckButton>
            </Link>
         </SearchDetailsText>
      </SearchItemDetails>
    </SearchItemm>
  )
}

export default SearchItem

const SearchItemm = styled.div`
   border: 1px solid lightgray;
   padding: 10px;
   border-radius: 5px;
   display: flex;
   justify-content: space-between;
   gap: 20px;
   margin-bottom: 20px;

`
const SearchItemImg = styled.img`
   width: 200px;
   height: 200px;
   object-fit:cover;
`
const SearchItemDesc = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;
   flex: 2;
`
const SearchItemTitle = styled.h1`
   font-size: 20px;
   color: #0071c2;
`
const SearchItemDistance = styled.span`
   font-size: 12px;
`
const SearchItemTaxiOp = styled.span`
   font-size: 12px;
   background-color: #008009;
   color: #fff;
   width: max-content;
   padding: 3px;
   border-radius: 5px;
`
const SearchItemSubtitle = styled.span`
   font-size: 12px;
   font-weight: bold;
`
const SearchItemFeatures = styled.span`
   font-size: 12px;
`
const SearchItemCancelOp = styled.span`
   font-size: 12px;
   color: #008009;
   font-weight: bold;
`
const SearchItemCancelOpTitle = styled.span`
   font-size: 12px;
   color: #008009;
`
const SearchItemDetails = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
const SearchItemRating  =styled.div`
   display: flex;
   justify-content: space-between;
`
const Span  =styled.span`
   font-weight: 500;
`
const Button  =styled.button`
   background-color: #003580;
   color: #fff;
   font-weight: bold;
   padding: 5px;
   border-radius: 5px;
   border: none;
`
const SearchDetailsText  =styled.div`
   text-align: right;
   display: flex;
   flex-direction: column;
   gap: 5px;
`
const SearchDetailsPrice  =styled.span`
   font-size: 24px;
`
const SearchDetailsTaxOp  =styled.span`
   font-size: 12px;
   color: gray;
`
const SearchDetailsCheckButton  =styled.button`
   background-color: #0071c2;
   color: #fff;
   padding: 10px 5px;
   font-weight: bold;
   border: none;
   cursor: pointer;
   border-radius: 5px;
`