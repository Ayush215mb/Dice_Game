import styled from "styled-components";

const TotalScore = ({ Score }) => {
  return (
    <Scorecontainer>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </Scorecontainer>
  );
};

export default TotalScore;

const Scorecontainer = styled.div`
  text-align: center;
  min-width: 200px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 62px;
    height: 112px;
    font-size: 100px;
    font-weight: 500;
    line-height: 150px;
  }

  p {
    width: 135px;
    height: 36px;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
  }
`;
