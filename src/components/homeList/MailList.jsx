import React from 'react'
import { styled } from 'styled-components'

const MailList = () => {
  return (
    <Mail>
      <MailTitle>Save time, save Money!</MailTitle>
      <MailDesc>Sign up and we'll send the best deals to you</MailDesc>
      <MailInputCont>
         <Input placeholder='Your Email' type='text'/>
         <Button>Subscribe</Button>
      </MailInputCont>
    </Mail>
  )
}

export default MailList

const Mail = styled.div`
   width: 100%;
   margin-top: 30px;
   background-color: #003580;
   color: #fff;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   padding: 30px 0px;
`
const MailTitle = styled.h1`
   
`
const MailDesc = styled.span`
   
`
const MailInputCont = styled.div`
   
`
const Input = styled.input`
   width: 300px;
   height: 30px;
   padding: 10px;
   border: none;
   margin-right: 10px;
   border-radius: 5px;
`
const Button = styled.button`
   height: 50px;
   background-color: #0071c2;
   font-weight: 500;
   cursor: pointer;
   border: none;
   border-radius: 5px;
   color: #fff;
   padding: 0px 5px;
`