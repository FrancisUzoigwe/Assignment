import styled from "styled-components";
import image from "../../Assets/pexels-pixabay-276514.jpg";
import hand from "../../Assets/hand (2).jpg";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Main>
          <Left>
            <Bigtext>
              Summarize Cumbersome Books <br /> at the <span>Com</span>f
              <span>ort</span> of your <span>Home</span>
            </Bigtext>
            <Small>Be your reading companion......</Small>
            <Button>
              {/* <ButtonProps
                text="Get Started"
                link="/auth/signup"
                bg="green"
                col="white"
                hbg="darkgrey"
              /> */}
            </Button>
          </Left>
          <Right>
            <img src={hand} alt="" />
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default LandingPage;


const Button = styled.div`
  margin-top: 30px;
  margin-left: 100px;
`;

const Small = styled.div`
  text-align: left;
  margin-top: 20px;
`;

const Bigtext = styled.div`
  margin-top: 20px;
  font-size: 40px;
  font-weight: bolder;
  text-align: center;
  font-family: Nova Oval;
  text-align: left;

  span {
    color: green;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f8f6;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f9f8f6;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: auto;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 85vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${image});
  background-attachment: fixed;
`;
const Main = styled.div`
  width: 93%;
  height: 600px;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f8f6;
`;
