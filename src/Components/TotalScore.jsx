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

    @media (max-width: 768px) {
    h1 {
      font-size: 80px;
      width: 50px;
      height: 90px;
      line-height: 120px;
    }

    p {
      font-size: 20px;
      width: 120px;
      height: 30px;
      line-height: 30px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 60px;
      width: 40px;
      height: 70px;
      line-height: 90px;
    }

    p {
      font-size: 18px;
      width: 100px;
      height: 25px;
      line-height: 25px;
    }
  }
`;
