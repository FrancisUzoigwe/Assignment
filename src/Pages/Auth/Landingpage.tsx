import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Landingpage = () => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <Register to="/signup">Register</Register>
    </div>
  )
}

export default Landingpage

const Register = styled(Link)`
margin-top: 100px;
text-decoration: none;
`;