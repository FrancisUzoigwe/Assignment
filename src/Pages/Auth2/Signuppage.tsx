import styled from "styled-components";
import { HiUserGroup } from "react-icons/hi";
import { Link, Navigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { registerAuthor } from "../../Api/AuthorApi";

const Signuppage = () => {
  const navigate = useNavigate();

  const Schema = yup.object({
    Username: yup.string().required(),
    password: yup.string().required(),
    Name: yup.string().required(),
    Email: yup.string().required(),
    Password: yup.string().required(),
    Confirm: yup.string().oneOf([yup.ref("Password")]),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (res: any) => {
    const { Email, Password, Name, Username } = res;
    const formData = new FormData();
    formData.append("Email", Email);
    formData.append("Name", Name);
    formData.append("Username", Username);
    formData.append("Password", Password);

    registerAuthor(formData).then((res: any) => {
      navigate("/signinpage");

      reset();
    });
    console.log(res);
  
  });

  return (
    <div>
      <Container>
        <Main>
          <Top>
            <HiUserGroup color="white" size={80} />
          </Top>
          <Up>
            <Left to="/signinpage">Login</Left>
          </Up>
          <Mid onSubmit={onHandleSubmit}>
            <Holder>
              <Input
                placeholder="Enter Username"
                type="text"
                {...register("Username")}
              />
              {errors.Username && <Error>Error</Error>}
            </Holder>
            <Holder>
              <Input
                placeholder="Enter Name"
                type="text"
                {...register("Name")}
              />
              {errors.Name && <Error>Error</Error>}
            </Holder>
            <Holder>
              <Input
                placeholder="Enter Email"
                type="text"
                {...register("Email")}
              />

              {errors.Email && <Error>Error</Error>}
            </Holder>
            <Holder>
              <Input
                placeholder="Enter Password"
                type="password"
                {...register("Password")}
              />
              {errors.Password && <Error>Error</Error>}
            </Holder>
            <Holder>
              <Input
                placeholder="Confirm Password"
                type="password"
                {...register("Confirm")}
              />
              {errors.Confirm && <Error>Error</Error>}
            </Holder>
          </Mid>
          {/* <Check>
            <input type="checkbox" />
            By checking this box, you accept the terms and condition
          </Check> */}
          <Hold>
            <Button type="submit">Signup</Button>
          </Hold>
          <All>
            Already have an account? <Nav to="/signinpage">Signin</Nav>
          </All>
        </Main>
      </Container>
    </div>
  );
};

export default Signuppage;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
`;

const Holder = styled.div`
  width: 300px;
  height: auto;
`;

const Error = styled.div`
  color: red;
  font-size: 10px;
  font-weight: 500;
  margin-top: 2px;
  display: flex;
  justify-content: flex-end;
`;

const All = styled.div`
  font-size: 14px;
  margin-top: 15px;
`;

const Nav = styled(Link)`
  text-decoration: none;
`;

const Check = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Hold = styled.div`
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  background-color: #e6e6e6;
  border-radius: 20px;
  border: none;
  margin-top: 10px;
  outline: none;
  padding-left: 10px;

  ::placeholder {
    text-align: center;
  }
`;

const Mid = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Left = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

const Up = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Top = styled.div`
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000); /*IE 5.5-7*/
  width: 120px;
  height: 100px;
  border-radius: 15px 15px 100px 100px;
  border: 1px solid black;
  margin-top: -40px;
  border: none;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  height: 480px;
  border-radius: 10px;
  background: white;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000); /*IE 5.5-7*/
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f8f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
