import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <Footerr>
      <FooterList>
         <Flist>
            <FListItem>Countries</FListItem>
            <FListItem>Regions</FListItem>
            <FListItem>Cities</FListItem>
            <FListItem>Districts</FListItem>
            <FListItem>Aoirports</FListItem>
            <FListItem>Hotels</FListItem>
            <FListItem>Place of interest</FListItem>
         </Flist>
         <Flist>
            <FListItem>Homes</FListItem>
            <FListItem>Appartments</FListItem>
            <FListItem>Resorts</FListItem>
            <FListItem>villas</FListItem>
            <FListItem>Hostels</FListItem>
            <FListItem>B&Bs</FListItem>
            <FListItem>Guest House</FListItem>
         </Flist>
         <Flist>
            <FListItem>Unique places to stay</FListItem>
            <FListItem>All destinations</FListItem>
            <FListItem>All flight destinations</FListItem>
            <FListItem>All car hire locations</FListItem>
            <FListItem>Discover</FListItem>
            <FListItem>Reviews</FListItem>
            <FListItem>Discover monthly stays</FListItem>
            <FListItem>Unpacked: Travel articles</FListItem>
            <FListItem>Seasonal and holiday deals</FListItem>
            <FListItem>Traveller Review Awards</FListItem>
         </Flist>
         <Flist>
            
            <FListItem>Car hire</FListItem>
            <FListItem>Flight finder</FListItem>
            <FListItem>Restaurant reservations</FListItem>
         </Flist>
         <Flist>
            <FListItem>Coronavirus (COVID-19) FAQs</FListItem>
            <FListItem>About Booking.com</FListItem>
            <FListItem>Customer Service help</FListItem>
            <FListItem>Partner help</FListItem>
            <FListItem>Careers</FListItem>
            <FListItem>Sustainability</FListItem>
            <FListItem>Press centre</FListItem>
            <FListItem>Safety resource centre</FListItem>
            <FListItem>Investor relations</FListItem>
            <FListItem>Terms & Conditions</FListItem>
            <FListItem>Partner dispute</FListItem>
            <FListItem>How we work</FListItem>
            <FListItem>Privacy & Cookie Statement</FListItem>
            <FListItem>MSA Statement</FListItem>
            <FListItem>Corporate contact</FListItem>
            <FListItem>Content guidelines</FListItem>
         </Flist>
      </FooterList>
    </Footerr>
  )
}

export default Footer

const Footerr = styled.div`
   width: 100%;
   max-width: 1024px;
   margin: auto;
   font-size: 12px;
   margin-top: 50px;
`
const FooterList = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 50px;
`
const Flist = styled.ul`
   list-style: none;
   padding: 0;
`
const FListItem = styled.li`
   margin-bottom: 10px;
   color: #0071c2;
   cursor: pointer;
`