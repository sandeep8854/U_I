import styled from "styled-components";
// import womenE from "../img/women-1.png";
// import women from "../img/women.jpg";
// import women from "../img/women-2.png";
// import women from "../img/women-4.png";
import women from "../img/women-5.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Creative = styled.span`
  color: crimson;
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Button = styled.button`
  padding: 15px;
  background-color: crimson;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  letter-spacing: 1.2px;
  cursor: pointer;
  text-transform: uppercase;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
const Image = styled.img`
  /* width: 100%; */
  object-fit: cover;
  height: 120%;
`;
const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>
          Adventures in <Creative>creative</Creative> age.
        </Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>Start a project</Button>
          <Contact>
            <Phone>Call us (+91) 811 291 2494</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image />
        <Image src={women} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};
export default Intro;
