import styled from "styled-components";
import PriceCart from "./PriceCart";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Price = () => {
  return (
    <Container>
      <PriceCart price="499" type="Basic" />
      <PriceCart price="799" type="Premium" />
      <PriceCart price="999" type="Advanced" />
    </Container>
  );
};

export default Price;
