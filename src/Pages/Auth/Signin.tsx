import styled from "styled-components";
import Girl from "../../Assets/images-removebg-preview.png";
import pix from "../../Assets/avatar2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerAuthor } from "../../Api/AuthorApi";

const Signin = () => {
  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
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
    const { email, password, name } = res;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    registerAuthor(formData).then(() => {
      navigate("/home");

      reset();
    });

    // console.log(res)
  });

  const navigate = useNavigate();
  const [image, setImage] = useState(pix);
  const [avatar, setAvatar] = useState("");

  const onHandleImage = (e: any) => {
    try {
      const file = e.target.files[0];
      const realImage: any = URL.createObjectURL(file);
      setImage(realImage);
      setAvatar(file);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <Main>
          <Left>
            <Holder onSubmit={onHandleSubmit}>
              <Top>Signin</Top>
              <Mid>
                <Hold>
                  <InputHold mg="20px">
                    <Name>Email:</Name>
                    <Input placeholder="textgmail.com" {...register("email")} />
                    {errors.email && (
                      <Error>Please provide a valid email address</Error>
                    )}
                  </InputHold>
                  <InputHold mg="20px">
                    <Name>Password:</Name>
                    <Input
                      placeholder="1234567890"
                      type="password"
                      {...register("password")}
                    />
                    {errors.password && <Error>Provide a password</Error>}
                  </InputHold>
                </Hold>
              </Mid>
              <Button type="submit">Signin</Button>
              <Word>
                Don't Have an account? <Sign to="/signup">Signup</Sign>
              </Word>
            </Holder>
          </Left>
          <Right>
            <img src={Girl} alt="Picture" />
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default Signin;
const Top = styled.div`
margin-top: 10px;
font-size: 20px;
font-weight: 600;
`;

const Sign = styled(Link)`
  margin-left: 10px;
  color: blue;
`;

const Word = styled.div`
  font-size: 13px;
  display: flex;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ImageHolder = styled.div`
  width: auto;
  height: auto;
`;

const ImageInput = styled.input`
  display: none;
`;

const Error = styled.div`
  font-size: 11px;
  margin-top: 1px;
  font-weight: 500;
  color: red;
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 3px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-left: 270px;
  margin-top: -40px;
`;

// const But = styled.label`
//   font-size: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 10px;
//   margin-left: 10px;
//   width: 90px;
//   height: 35px;
//   border-radius: 5px;
//   border: none;
//   background-color: black;
//   color: white;
//   margin-bottom: 10px;
//   transition: all 450ms;

//   :hover {
//     cursor: pointer;
//     background-color: grey;
//   }
// `;

const Input = styled.input`
  border: none;
  width: 295px;
  height: 23px;
  outline: none;
  margin-top: 2px;

  ::placeholder {
    font-weight: 700;
  }
`;

const Name = styled.div`
  position: absolute;
  margin-top: -10px;
  font-size: 13px;
  font-weight: 500;
  background-color: white;
  margin-left: 10px;
`;

const InputHold = styled.div<{ mg: string }>`
  height: 30px;
  width: 300px;
  position: relative;
  border: 1px solid black;
  margin-top: ${({ mg }) => mg};
`;

const Hold = styled.div`
  /* border: 1px solid black; */
`;

const Mid = styled.div``;

// const Image = styled.img`
//   width: 110px;
//   height: 110px;
//   border: 1px solid silver;
//   border-radius: 50%;
//   margin-top: 15px;
// `;

const Holder = styled.form`
  width: 380px;
  height: 250px;
  border-radius: 5px;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 450ms;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 60%;
    height: 60%;
    object-fit: cover;
  }
`;

const Main = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgrey;
  border-radius: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;
