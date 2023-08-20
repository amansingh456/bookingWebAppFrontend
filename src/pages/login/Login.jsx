import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Styled from "styled-components"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const initialUserData = {
   userName: "",
   password: ""
}

const Login = () => {
   const [credentials, setCredentials] = useState(initialUserData)

   const { loading, error, dispatch } = useContext(AuthContext)

   const navigate = useNavigate()

   const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
   }
   const handleLogin = async (e) => {
      dispatch({ type: "LOGIN_START" })
      try {
         const res = await axios.post("https://tender-bass-sweatpants.cyclic.app/api/auth/login", credentials)
         dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
         navigate("/")
         // setCredentials((prev)=>({...prev,[e.target.id]:e.target.value=""}))
      } catch (error) {
         dispatch({ type: "LOGIN_ERROR", payload: error.response.data })
      }
   }

   return (
      <Loginn>
         <LoginCont>
            <input type="text" placeholder='userName' id="userName" onChange={handleChange} />
            <input type="password" placeholder='password' id="password" onChange={handleChange} />
            <button disabled={loading} onClick={handleLogin}>Login</button>
            {error && <span>{error.message}</span>}
         </LoginCont>
      </Loginn>
   )
}

export default Login


const Loginn = Styled.div`
   
`
const LoginCont = Styled.div`
   display:flex;
   flex-direction:column;
   width:40%;
   margin:auto;
   border:1px solid red
`