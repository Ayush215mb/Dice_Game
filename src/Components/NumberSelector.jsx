import styled from "styled-components";

const NumberSelector = ({ error, Selectednumbr, setSelectednumbr }) => {
  const arrnumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberContainer>
      <p>Select Number</p>
      <div className="content">
        {arrnumber.map((value, i) => (
          <Box
            isselected={value === Selectednumbr}
            key={i}
            onClick={() => setSelectednumbr(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <ErrorContainer>{error}</ErrorContainer>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  .content {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    margin-block: 20px;
    text-align: center;
  }

    @media (max-width: 768px) {
    .content {
      gap: 16px;
      justify-content: center;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .content {
      gap: 12px;
      justify-content: center;
    }

    p {
      font-size: 18px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  font-size: 24px;
  font-weight: 700;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isselected ? "black" : "White")};
  color: ${(props) => (props.isselected ? "White" : "black")};
  cursor: pointer;

    @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
    display: grid;
    place-items: center;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
    display: grid;
    place-items: center;
  }
`;

const ErrorContainer = styled.span`
  display: block;

  font-size: 18px;
  margin-block: 15px;
  text-align: center;
  font-size: 500;
  color: red;

    @media (max-width: 768px) {
    font-size: 16px;
    margin-block: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-block: 8px;
  }
`;
