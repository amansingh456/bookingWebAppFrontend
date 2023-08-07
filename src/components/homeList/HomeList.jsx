import React from 'react'
import { styled } from 'styled-components'
import Featured from './Featured'
import PropertyList from './PropertyList'
import FeaturedProp from './FeaturedProp'
import MailList from './MailList'

const HomeList = () => {
  return (
    <HomeContainer>
      <Featured/>
      <HomeTitle>Browse by property type</HomeTitle>
      <PropertyList/>
      <HomeTitle>Homes guests love ❤️</HomeTitle>
      <FeaturedProp/>
      <MailList/>
    </HomeContainer>
  )
}

export default HomeList

const HomeContainer = styled.div`
   margin-top: 50px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 30px;
`
const HomeTitle = styled.h1`
   width: 1024px;
    font-size: 20px;
`