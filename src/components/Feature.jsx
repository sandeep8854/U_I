import styled from "styled-components";
import phoneInHand from "../img/femaleHand2.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 20px 30px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;
const BusinessTitle = styled.span`
  color: crimson;
`;

const BusinessTitleGood = styled.span`
  color: crimson;
  font-weight: 800;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  padding: 15px;
  background-color: crimson;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  letter-spacing: 1.2px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 20px;
`;
const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={phoneInHand} />
      </Left>
      <Right>
        <Title>
          <b>Good</b> <BusinessTitle>design.</BusinessTitle>
          <br />
          <BusinessTitleGood>Good</BusinessTitleGood> business.
        </Title>
        <SubTitle>
          We know that good design means good
          <BusinessTitle> business.</BusinessTitle>
        </SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look <BusinessTitle>fantastic.</BusinessTitle>
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn more!</Button>
        <AnimatedShapes />
      </Right>
    </Container>
  );
};

export default Feature;
