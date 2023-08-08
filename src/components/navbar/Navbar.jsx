import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../../context/AuthContext'
const Navbar = () => {
  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)
  const handleClick = () =>{
    console.log("Im clicked")
    dispatch({type:"LOGOUT"})
  }
  return (
    <Navbarr>
      <NavContainer>
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
          <Logo onClick={()=>navigate("/")}>BlisStay</Logo>
        </Link>
        {user ? <Button onClick={handleClick}>Logout</Button> : (
            <NavBtns>
            <Button>Register</Button>
            <Button>Login</Button>
        </NavBtns>
        )}
      </NavContainer>
    </Navbarr>
  )
}

export default Navbar




const Navbarr = styled.div`
    height: 50px;
    background-color: #003580;
    display: flex;
    justify-content: center;
`
const NavContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    /* background-color: red; */
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.span`
    font-weight: 600;
    font-size: 26px;
    cursor: pointer;
`
const NavBtns = styled.div`
`
const Button = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: 500;
  color: #003580;
`