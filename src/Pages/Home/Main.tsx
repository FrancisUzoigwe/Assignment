import {Link} from "react-router-dom"
import { styled } from "styled-components"

const Main = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "100px"}}> 
      {/* <Button to="/home/signuppage">Get Started</Button> */}
      <div>Welcome to the HomeScreen</div>
    </div>
  )
}

export default Main

// const Button = styled(Link)`
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   background-color: black;
//   color: white;
// text-decoration: none;
// `;