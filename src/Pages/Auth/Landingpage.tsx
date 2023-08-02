import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Landingpage = () => {
  return (
    <div>
        <Register to="/signup">Register</Register>
    </div>
  )
}

export default Landingpage

const Register = styled(Link)``;