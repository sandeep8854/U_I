import styled from "styled-components";
import How from "../img/how.png";
import MiniCart from "./MiniCart";
import Play from "../img/play.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
  height: 100%;
  margin-left: 100px;
`;
const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;
const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;
const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 170px;
  padding: 15px;
  background-color: crimson;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  letter-spacing: 1.2px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;
const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={How} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources.
          </Desc>
          <CartContainer>
            <MiniCart />
            <MiniCart />
            <MiniCart />
          </CartContainer>
          <Button>
            <Icon src={Play}></Icon>How it works
          </Button>
        </Wrapper>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Service;
