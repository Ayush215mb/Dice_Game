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
      <Error>{error}</Error>
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
`;

const Error = styled.span`
  display: block;

  font-size: 18px;
  margin-block: 15px;
  text-align: center;
  font-size: 500;
  color: red;
`;
